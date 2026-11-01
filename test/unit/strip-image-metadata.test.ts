import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { after, test } from 'node:test';

const TOOL = path.resolve('tools/strip-image-metadata.mts');
const ORIENTATION_TAG = 0x0112;
const GPS_POINTER_TAG = 0x8825;

const directory = mkdtempSync(path.join(tmpdir(), 'strip-image-metadata-'));

after(() => rmSync(directory, { recursive: true, force: true, }));

function jpegSegment(marker: number, payload: Buffer): Buffer {
  const header = Buffer.alloc(4);
  header.writeUInt8(0xff, 0);
  header.writeUInt8(marker, 1);
  header.writeUInt16BE(payload.length + 2, 2);
  return Buffer.concat([ header, payload, ]);
}

function exifPayload(orientation: number): Buffer {
  const tiff = Buffer.alloc(38);
  tiff.write('II', 0, 'latin1');
  tiff.writeUInt16LE(42, 2);
  tiff.writeUInt32LE(8, 4);
  tiff.writeUInt16LE(2, 8);
  tiff.writeUInt16LE(ORIENTATION_TAG, 10);
  tiff.writeUInt16LE(3, 12);
  tiff.writeUInt32LE(1, 14);
  tiff.writeUInt16LE(orientation, 18);
  tiff.writeUInt16LE(GPS_POINTER_TAG, 22);
  tiff.writeUInt16LE(4, 24);
  tiff.writeUInt32LE(1, 26);
  return Buffer.concat([ Buffer.from('Exif\0\0', 'latin1'), tiff, ]);
}

// Scan data with a stuffed byte and a restart marker, neither of which ends the image.
const JPEG_SCAN = Buffer.from([ 0xff, 0xda, 0x00, 0x02, 0x12, 0xff, 0x00, 0x34, 0xff, 0xd3, 0x56, ]);
const ICC_SEGMENT = jpegSegment(0xe2, Buffer.from('ICC_PROFILE\0profile', 'latin1'));

function buildJpeg(orientation: number): Buffer {
  return Buffer.concat([
    Buffer.from([ 0xff, 0xd8, ]),
    jpegSegment(0xe0, Buffer.from('JFIF\0', 'latin1')),
    jpegSegment(0xe1, exifPayload(orientation)),
    jpegSegment(0xe1, Buffer.from('http://ns.adobe.com/xap/1.0/\0GPSLatitude', 'latin1')),
    jpegSegment(0xed, Buffer.from('Photoshop 3.0\0location', 'latin1')),
    jpegSegment(0xe2, Buffer.from('MPF\0offsets', 'latin1')),
    jpegSegment(0xfe, Buffer.from('a comment', 'latin1')),
    ICC_SEGMENT,
    JPEG_SCAN,
    Buffer.from([ 0xff, 0xd9, ]),
    Buffer.from([ 0xff, 0xd8, ]),
    jpegSegment(0xe1, exifPayload(1)),
    Buffer.from([ 0xff, 0xd9, ]),
  ]);
}

function pngChunk(type: string, data: string): Buffer {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  return Buffer.concat([ length, Buffer.from(type + data, 'latin1'), Buffer.alloc(4), ]);
}

function writeFile(name: string, content: Buffer): string {
  const file = path.join(directory, name);
  writeFileSync(file, content);
  return file;
}

function clean(file: string): Buffer {
  execFileSync(process.execPath, [ TOOL, file, ]);
  return readFileSync(file);
}

function check(folder: string): number | null {
  return spawnSync(process.execPath, [ TOOL, '--check', folder, ]).status;
}

test('removes JPEG metadata and keeps the image data and colour profile', () => {
  const file = writeFile('plain.jpg', buildJpeg(1));
  const result = clean(file);

  for (const removed of [ 'Exif', 'GPSLatitude', 'Photoshop', 'MPF', 'a comment', ]) {
    assert.ok(!result.includes(removed), `${removed} was kept`);
  }
  assert.ok(result.includes(ICC_SEGMENT), 'the colour profile was removed');
  assert.ok(result.includes(JPEG_SCAN), 'the image data changed');
  assert.ok(result.includes('JFIF'));
});

test('removes images appended after the end of a JPEG', () => {
  const result = clean(writeFile('appended.jpg', buildJpeg(1)));

  assert.equal(result.indexOf(Buffer.from([ 0xff, 0xd9, ])), result.length - 2);
});

test('keeps a rotated JPEG rotated, without its other EXIF', () => {
  const result = clean(writeFile('rotated.jpg', buildJpeg(6)));
  const tiff = result.indexOf('Exif\0\0') + 6;

  assert.equal(result.readUInt16LE(tiff + 8), 1, 'expected a single EXIF entry');
  assert.equal(result.readUInt16LE(tiff + 10), ORIENTATION_TAG);
  assert.equal(result.readUInt16LE(tiff + 18), 6);
});

test('removes PNG metadata and keeps the image chunks', () => {
  const signature = Buffer.from([ 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, ]);
  const file = writeFile('image.png', Buffer.concat([
    signature,
    pngChunk('IHDR', 'header'),
    pngChunk('eXIf', 'gps'),
    pngChunk('tEXt', 'location'),
    pngChunk('IDAT', 'pixels'),
    pngChunk('IEND', ''),
    Buffer.from('trailing'),
  ]));
  const result = clean(file);

  for (const removed of [ 'eXIf', 'tEXt', 'trailing', ]) {
    assert.ok(!result.includes(removed), `${removed} was kept`);
  }
  for (const chunk of [ 'IHDR', 'IDAT', 'IEND', ]) {
    assert.ok(result.includes(chunk), `${chunk} was removed`);
  }
});

test('cleaning twice changes nothing, so a clean folder passes the check', () => {
  const folder = mkdtempSync(path.join(directory, 'clean-'));
  const file = path.join(folder, 'rotated.jpg');
  writeFileSync(file, buildJpeg(6));

  assert.equal(check(folder), 1, 'expected metadata to fail the check');

  const once = clean(file);

  assert.deepEqual(clean(file), once);
  assert.equal(check(folder), 0);
});

// Hooks set GIT_DIR and GIT_INDEX_FILE, which would point these commands at the real repo.
function buildGitFreeEnvironment(): NodeJS.ProcessEnv {
  return Object.fromEntries(Object.entries(process.env).filter(([ name, ]) => !name.startsWith('GIT_')));
}

function buildRepository(): string {
  const repository = mkdtempSync(path.join(directory, 'repository-'));
  mkdirSync(path.join(repository, 'public/images'), { recursive: true, });
  mkdirSync(path.join(repository, 'assets'));
  writeFileSync(path.join(repository, 'public/images/photo.jpg'), clean(writeFile('allowed.jpg', buildJpeg(1))));
  writeFileSync(path.join(repository, 'assets/Photo.JPG'), 'image');
  writeFileSync(path.join(repository, 'assets/notes.txt'), 'not an image');
  execFileSync('git', [ 'init', '--quiet', ], { cwd: repository, env: buildGitFreeEnvironment(), });
  return repository;
}

function runInRepository(repository: string, args: string[]) {
  return spawnSync(process.execPath, [ TOOL, ...args, ], {
    cwd: repository,
    encoding: 'utf8',
    env: buildGitFreeEnvironment(),
  });
}

function stage(repository: string, files: string): void {
  execFileSync('git', [ 'add', files, ], { cwd: repository, env: buildGitFreeEnvironment(), });
}

test('the check fails on a tracked image outside public/images', () => {
  const repository = buildRepository();
  stage(repository, 'public');

  assert.equal(runInRepository(repository, [ '--check', ]).status, 0, 'untracked files should be ignored');

  stage(repository, 'assets');
  const result = runInRepository(repository, [ '--check', ]);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /assets\/Photo\.JPG: images belong in public\/images/);
  assert.doesNotMatch(result.stderr, /notes\.txt/);
});

test('a commit is refused when it stages an image outside public/images', () => {
  const repository = buildRepository();
  stage(repository, 'public');

  assert.equal(runInRepository(repository, [ '--staged', ]).status, 0);

  stage(repository, 'assets');
  const result = runInRepository(repository, [ '--staged', ]);

  assert.equal(result.status, 1);
  assert.match(result.stderr, /assets\/Photo\.JPG: images belong in public\/images/);
});

test('the check fails on a format it can\'t clean, and allows the favicon', () => {
  const folder = mkdtempSync(path.join(directory, 'formats-'));
  writeFileSync(path.join(folder, 'favicon.ico'), 'icon');

  assert.equal(check(folder), 0);

  writeFileSync(path.join(folder, 'photo.heic'), 'heic');

  assert.equal(check(folder), 1);
});
