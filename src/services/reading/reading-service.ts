import { BookRecord, ReadingStats } from './types';
import { calculateBooksByYear, calculateStats } from './stats';
import readingLog from './data/reading-log';

function sortLogDescending(a: BookRecord, b: BookRecord): number {
  return b.start.getTime() - a.start.getTime();
}

function getReadingLog(): BookRecord[] {
  return readingLog.sort(sortLogDescending)
}

function getReadingStats(): ReadingStats {
  return {
    stats: calculateStats(readingLog),
    booksByYear: calculateBooksByYear(readingLog),
  }
}

export default {
  getReadingLog,
  getReadingStats,
};
