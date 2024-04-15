import { BookRecord, SeriesRecord } from './types';

function sortSeriesAlpha(a: SeriesRecord, b: SeriesRecord): number {
  const textA = a.name.toUpperCase();
  const textB = b.name.toUpperCase();
  if (textA < textB) {
    return -1;
  } else {
    return (textA > textB) ? 1 : 0;
  }
}

export function calculateSeriesStats(readingLog: BookRecord[]): SeriesRecord[] {
  const groups = new Map<string, SeriesRecord>();

  for (let i = 0; i < readingLog.length; i++) {
    const record = readingLog[i];

    if (record === undefined || record.series === undefined) {
      continue;
    }

    if (!groups.has(record.series)) {
      groups.set(record.series, {
        name: record.series,
        titles: [],
      });
    }

    groups.get(record.series)?.titles.push(record);
  }

  return Array.from(groups.values()).sort(sortSeriesAlpha);
}
