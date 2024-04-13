import { BookRecord, ReadingStats, ReadingStat, BooksPerYear } from './types';
import { calculateBooksByYear, calculateStats } from './stats';
import readingLog from './data/reading-log';

const stats: ReadingStat[] = calculateStats(readingLog);
const booksByYear: BooksPerYear[] = calculateBooksByYear(readingLog);

function sortLogDescending(a: BookRecord, b: BookRecord): number {
  return b.start.getTime() - a.start.getTime();
}

function getReadingLog(): BookRecord[] {
  return readingLog.sort(sortLogDescending)
}

function getReadingStats(): ReadingStats {
  return {
    stats,
    booksByYear,
  }
}

export default {
  getReadingLog,
  getReadingStats,
};
