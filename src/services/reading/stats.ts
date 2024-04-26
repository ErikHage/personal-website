import { BookRecord, BooksPerYear, ReadingStat } from './types'

const MILLIS_PER_DAY: number = 1000 * 60 * 60 * 24;
const MILLIS_PER_YEAR: number = 1000 * 60 * 60 * 24 * 365;
const START_DATE =  new Date('11/5/11');

const newStat = (name: string, value: string): ReadingStat => ({
  name,
  value,
});

function calculateDays(start: Date, finish: Date | undefined): number | undefined {
  if (finish === undefined) {
    return undefined;
  }
  return ((finish.getTime() - start.getTime()) / MILLIS_PER_DAY) + 1;
}

function countBooksRead(readingLog: BookRecord[]): number {
  return readingLog.filter(
    (record: BookRecord) => record.finish !== undefined
  ).length;
}

function lastBookRead(readingLog: BookRecord[]): BookRecord {
  return readingLog.find((record: BookRecord) => record.finish !== undefined)!;
}

function getCurrentBooks(readingLog: BookRecord[]): BookRecord[] {
  return readingLog.filter((record: BookRecord) => record.finish === undefined);
}

function getBooksPerYear(numRead: number, startDate: Date): number {
  const now: Date = new Date();
  const totalYears = (now.getTime() - startDate.getTime()) / MILLIS_PER_YEAR;
  const booksPerYear = numRead / totalYears;

  return (Math.round(100 * booksPerYear)) / 100;
}

function getFastestAndSlowestRead(readingLog: BookRecord[]): {
  fastestRead: BookRecord,
  fastestDays: number,
  slowestRead: BookRecord,
  slowestDays: number,
} {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let maxRecord: BookRecord = readingLog[0]!;
  let minRecord: BookRecord = readingLog[0]!;

  for (let i = 0; i < readingLog.length; i++) {
    const record = readingLog[i]!;
    const days: number | undefined = calculateDays(record.start, record.finish)

    if (days === undefined) {
      continue;
    }

    if (days > max) {
      max = days;
      maxRecord = record;
    }
    if (days !== 0 && days < min) {
      min = days;
      minRecord = record;
    }
  }

  return {
    fastestRead: minRecord,
    fastestDays: min,
    slowestRead: maxRecord,
    slowestDays: max,
  };
}

function bookToString(book: BookRecord): string {
  let result= book.title;

  if (book.series) {
    result = `${result}: ${book.series}`;
    if (book.installment) {
      result = `${result} #${book.installment}`;
    }
  }

  return result;
}

export function calculateStats(readingLog: BookRecord[]): ReadingStat[] {
  const stats: ReadingStat[] = [];

  const lastBook: BookRecord = lastBookRead(readingLog);
  const currentBooks: BookRecord[] = getCurrentBooks(readingLog);
  const numRead: number = countBooksRead(readingLog);
  const {
    fastestRead,
    fastestDays,
    slowestRead,
    slowestDays,
  } = getFastestAndSlowestRead(readingLog);

  stats.push(newStat('Currently Reading', currentBooks.map(book => bookToString(book)).join(', ')));
  stats.push(newStat('Books Read', numRead.toString()));
  stats.push(newStat('Last Finished', bookToString(lastBook)));
  stats.push(newStat('Books Per Year', getBooksPerYear(numRead, START_DATE).toString()));
  stats.push(newStat('Fastest Read', `[${fastestDays} days] ${bookToString(fastestRead)}`));
  stats.push(newStat('Slowest Read', `[${slowestDays} days] ${bookToString(slowestRead)}`));

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
      counts.set(year, counts.get(year)! + 1);
    } else {
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
