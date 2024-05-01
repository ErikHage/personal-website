import {
  BookRecord,
  BooksPerYear,
  ReadingStat,
  ReadingStats,
  SeriesRecord
} from './types';
import readingLog from './data/reading-log';

import { calculateBooksByYear, calculateStats } from './stats';
import { calculateSeriesStats } from './series-stats';

const stats: ReadingStat[] = calculateStats(readingLog);
const booksByYear: BooksPerYear[] = calculateBooksByYear(readingLog);
const seriesStats: SeriesRecord[] = calculateSeriesStats(readingLog);

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

function getSeriesStats(): SeriesRecord[] {
  return seriesStats;
}

export default {
  getReadingLog,
  getReadingStats,
  getSeriesStats,
};
