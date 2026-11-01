/* eslint-disable no-console */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const IMAGES_DIRECTORY = 'public/images';
const ALLOWED_OTHER_FILES = [ 'favicon.ico', ];
const IMAGE_FILE = /\.(jpe?g|png|gif|webp|heic|heif|avif|tiff?|bmp|svg|ico)$/i;

const JPEG_SIGNATURE = Buffer.from([ 0xff, 0xd8, ]);
const JPEG_END_OF_IMAGE = 0xd9;
const JPEG_APP0 = 0xe0;
const JPEG_APP1 = 0xe1;
const JPEG_APP2 = 0xe2;
const JPEG_APP14 = 0xee;
const JPEG_APP15 = 0xef;
const JPEG_COMMENT = 0xfe;
const EXIF_HEADER = Buffer.from('Exif\0\0', 'latin1');
const ICC_HEADER = Buffer.from('ICC_PROFILE\0', 'latin1');
const ORIENTATION_TAG = 0x0112;
const DEFAULT_ORIENTATION = 1;

const PNG_SIGNATURE = Buffer.from([ 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, ]);
const PNG_METADATA_CHUNKS = [ 'eXIf', 'tEXt', 'zTXt', 'iTXt', ];

function readOrientation(payload: Buffer): number {
  if (!payload.subarray(0, EXIF_HEADER.length).equals(EXIF_HEADER)) {
    return DEFAULT_ORIENTATION;
  }

  try {
    const tiff = payload.subarray(EXIF_HEADER.length);
    const isLittleEndian = tiff.toString('latin1', 0, 2) === 'II';
    const read16 = (offset: number) => (isLittleEndian ? tiff.readUInt16LE(offset) : tiff.readUInt16BE(offset));
    const read32 = (offset: number) => (isLittleEndian ? tiff.readUInt32LE(offset) : tiff.readUInt32BE(offset));

    const directory = read32(4);
    const entryCount = read16(directory);

    for (let entry = 0; entry < entryCount; entry++) {
      const offset = directory + 2 + entry * 12;
      if (read16(offset) === ORIENTATION_TAG) {
        return read16(offset + 8);
      }
    }
  } catch {
    // Unreadable EXIF is removed like any other, and the image keeps the default orientation.
  }

  return DEFAULT_ORIENTATION;
}

// Removing EXIF would turn a rotated photo sideways, so its orientation is written back alone.
function buildOrientationSegment(orientation: number): Buffer {
  const tiff = Buffer.alloc(26);
  tiff.write('II', 0, 'latin1');
  tiff.writeUInt16LE(42, 2);
  tiff.writeUInt32LE(8, 4);
  tiff.writeUInt16LE(1, 8);
  tiff.writeUInt16LE(ORIENTATION_TAG, 10);
  tiff.writeUInt16LE(3, 12);
  tiff.writeUInt32LE(1, 14);
  tiff.writeUInt16LE(orientation, 18);

  const header = Buffer.alloc(4);
  header.writeUInt8(0xff, 0);
  header.writeUInt8(JPEG_APP1, 1);
  header.writeUInt16BE(2 + EXIF_HEADER.length + tiff.length, 2);

  return Buffer.concat([ header, EXIF_HEADER, tiff, ]);
}

function findJpegMarker(source: Buffer, start: number): number {
  for (let offset = start; offset + 1 < source.length; offset++) {
    const next = source.readUInt8(offset + 1);
    const isRestartMarker = next >= 0xd0 && next <= 0xd7;

    if (source.readUInt8(offset) === 0xff && next !== 0 && next !== 0xff && !isRestartMarker) {
      return offset;
    }
  }

  throw new Error('no end-of-image marker');
}

// An allow-list, so metadata in an unfamiliar segment is removed rather than kept by default.
function isKeptJpegSegment(marker: number, payload: Buffer): boolean {
  if (marker === JPEG_COMMENT) {
    return false;
  }
  if (marker < JPEG_APP0 || marker > JPEG_APP15) {
    return true;
  }
  if (marker === JPEG_APP2) {
    return payload.subarray(0, ICC_HEADER.length).equals(ICC_HEADER);
  }
  return marker === JPEG_APP0 || marker === JPEG_APP14;
}

// Stopping at the first end-of-image marker also drops the extra images phones append.
function stripJpeg(source: Buffer): Buffer {
  const kept: Buffer[] = [];
  let orientation = DEFAULT_ORIENTATION;
  let offset = JPEG_SIGNATURE.length;

  for (;;) {
    const start = findJpegMarker(source, offset);
    const marker = source.readUInt8(start + 1);
    kept.push(source.subarray(offset, start));

    if (marker === JPEG_END_OF_IMAGE) {
      kept.push(source.subarray(start, start + 2));
      break;
    }

    const end = start + 2 + source.readUInt16BE(start + 2);
    const payload = source.subarray(start + 4, end);

    if (marker === JPEG_APP1 && orientation === DEFAULT_ORIENTATION) {
      orientation = readOrientation(payload);
    }
    if (isKeptJpegSegment(marker, payload)) {
      kept.push(source.subarray(start, end));
    }

    offset = end;
  }

  const orientationSegment = orientation === DEFAULT_ORIENTATION
    ? Buffer.alloc(0)
    : buildOrientationSegment(orientation);

  return Buffer.concat([ JPEG_SIGNATURE, orientationSegment, ...kept, ]);
}

function stripPng(source: Buffer): Buffer {
  const kept: Buffer[] = [ PNG_SIGNATURE, ];
  let offset = PNG_SIGNATURE.length;

  while (offset < source.length) {
    const end = offset + 12 + source.readUInt32BE(offset);
    const type = source.toString('latin1', offset + 4, offset + 8);

    if (!PNG_METADATA_CHUNKS.includes(type)) {
      kept.push(source.subarray(offset, end));
    }
    if (type === 'IEND') {
      break;
    }

    offset = end;
  }

  return Buffer.concat(kept);
}

function strip(source: Buffer): Buffer {
  if (source.subarray(0, JPEG_SIGNATURE.length).equals(JPEG_SIGNATURE)) {
    return stripJpeg(source);
  }
  if (source.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
    return stripPng(source);
  }
  throw new Error('only JPEG and PNG can be checked for metadata');
}

function isAllowedOtherFile(file: string): boolean {
  return ALLOWED_OTHER_FILES.includes(path.basename(file));
}

function findFiles(directory: string): string[] {
  return readdirSync(directory, { recursive: true, withFileTypes: true, })
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath, entry.name));
}

function listGitFiles(args: string[]): string[] {
  return execFileSync('git', args, { encoding: 'utf8', }).split('\0').filter((file) => file !== '');
}

function isInImagesDirectory(file: string): boolean {
  return file.startsWith(`${IMAGES_DIRECTORY}/`);
}

// Images elsewhere would never be checked for metadata, so they're refused.
function findMisplacedImages(files: string[]): string[] {
  return files
    .filter((file) => IMAGE_FILE.test(file) && !isInImagesDirectory(file))
    .map((file) => `${file}: images belong in ${IMAGES_DIRECTORY}`);
}

function clean(file: string): boolean {
  const source = readFileSync(file);
  const stripped = strip(source);

  if (stripped.equals(source)) {
    return false;
  }

  writeFileSync(file, stripped);
  return true;
}

function cleanStaged(): void {
  const staged = listGitFiles([ 'diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z', ]);
  const misplaced = findMisplacedImages(staged);

  if (misplaced.length > 0) {
    misplaced.forEach((failure) => console.error(failure));
    process.exitCode = 1;
  }

  for (const file of staged.filter((image) => isInImagesDirectory(image) && !isAllowedOtherFile(image))) {
    try {
      if (clean(file)) {
        execFileSync('git', [ 'add', '--', file, ]);
        console.log(`Removed metadata from ${file}`);
      }
    } catch (error) {
      console.error(`${file}: ${(error as Error).message}`);
      process.exitCode = 1;
    }
  }
}

function check(directory: string): number {
  const failures = findMisplacedImages(listGitFiles([ 'ls-files', '-z', ]));

  for (const file of findFiles(directory).filter((image) => !isAllowedOtherFile(image))) {
    try {
      const source = readFileSync(file);
      if (!strip(source).equals(source)) {
        failures.push(`${file}: contains metadata, run node tools/strip-image-metadata.mts on it`);
      }
    } catch (error) {
      failures.push(`${file}: ${(error as Error).message}`);
    }
  }

  failures.forEach((failure) => console.error(failure));

  return failures.length > 0 ? 1 : 0;
}

const [ option, ...rest ] = process.argv.slice(2);

if (option === '--check') {
  process.exitCode = check(rest[0] ?? IMAGES_DIRECTORY);
} else if (option === '--staged') {
  cleanStaged();
} else {
  for (const file of process.argv.slice(2)) {
    console.log(`${file}: ${clean(file) ? 'removed metadata' : 'clean'}`);
  }
}
