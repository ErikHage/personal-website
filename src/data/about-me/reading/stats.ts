import { BookRecord, ReadingStat } from './types'

function countBooksRead(readingLog: BookRecord[]) {
  return {
    name: 'Books Read',
    value: readingLog.length.toString(),
  };
}

function lastBookRead(readingLog: BookRecord[]) {
  const lastFinished: BookRecord | undefined = readingLog.find(
    (record: BookRecord) => record.finish !== undefined
  );

  return {
    name: 'Last Finished',
    value: lastFinished?.title ?? '',
  };
}

function currentBook(readingLog: BookRecord[]) {
  const inProgress: BookRecord | undefined = readingLog.find(
    (record: BookRecord) => record.finish === undefined
  );

  return {
    name: 'Currently Reading',
    value: inProgress?.title ?? '',
  };
}

export function calculateStats(readingLog: BookRecord[]) {
  const stats: ReadingStat[] = [];

  stats.push(countBooksRead(readingLog));
  stats.push(lastBookRead(readingLog));
  stats.push(currentBook(readingLog));

  return stats;
}
