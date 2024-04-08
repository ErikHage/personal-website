import { BookRecord, BooksPerYear, ReadingStat } from './types'

const newStat = (name: string, value: string): ReadingStat => ({
  name,
  value,
});

function countBooksRead(readingLog: BookRecord[]): number {
  return readingLog.filter(
    (record: BookRecord) => record.finish !== undefined
  ).length;
}

function lastBookRead(readingLog: BookRecord[]): BookRecord {
  // this better not be null, it's ok to shit the bed if it is
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return readingLog.find((record: BookRecord) => record.finish !== undefined)!;
}

function getCurrentBook(readingLog: BookRecord[]): BookRecord | undefined {
  return readingLog.find((record: BookRecord) => record.finish === undefined);
}

function getStartDate(readingLog: BookRecord[]): Date {
  return readingLog[readingLog.length - 1]?.start ?? new Date();
}

function getBooksPerYear(numRead: number, startDate: Date): number {
  const now: Date = new Date();
  const totalYears = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);

  return numRead / totalYears;
}

export function calculateStats(readingLog: BookRecord[]): ReadingStat[] {
  const stats: ReadingStat[] = [];

  const lastBook: BookRecord = lastBookRead(readingLog);
  const currentBook: BookRecord | undefined = getCurrentBook(readingLog);
  const startOfLogging: Date = getStartDate(readingLog);
  const numRead: number = countBooksRead(readingLog);

  stats.push(newStat('Currently Reading', currentBook?.title ?? ''));
  stats.push(newStat('Books Read', numRead.toString()));
  stats.push(newStat('Last Finished', lastBook.title));
  stats.push(newStat('Books Per Year', getBooksPerYear(numRead, startOfLogging).toString()));

  return stats;
}

export function calculateBooksByYear(readingLog: BookRecord[]): BooksPerYear[] {
  const counts = new Map<number, number>();

  readingLog.forEach(record => {
    const year = record.finish?.getFullYear();

    if (year === undefined) {
      return;
    }

    if (counts.has(year)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      counts.set(year, counts.get(year)! + 1);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      counts.set(year!, 1);
    }
  });

  const results: BooksPerYear[] = [];
  for (const entry of counts.entries()) {
    results.push({
      year: entry[0].toString(),
      count: entry[1],
    });
  }

  return results;
}
