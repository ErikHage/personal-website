import { BookRecord, BooksPerYear, ReadingStat } from './types'

const MILLIS_PER_YEAR: number = 1000 * 60 * 60 * 24 * 365;
const START_DATE =  new Date('11/5/11');

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
  for (let i = readingLog.length - 1; i >= 0 ; i--) {
    if (readingLog[i] && readingLog[i]!.finish) {
      return readingLog[i]!;
    }
  }
  return readingLog[0]!;
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

  stats.push(newStat('Currently Reading', currentBooks.map(book => bookToString(book)).join(', ')));
  stats.push(newStat('Books Read', numRead.toString()));
  stats.push(newStat('Last Finished', bookToString(lastBook)));
  stats.push(newStat('Books Per Year', getBooksPerYear(numRead, START_DATE).toString()));

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
