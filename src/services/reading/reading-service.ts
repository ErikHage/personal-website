import {
  BookRecord,
  ReadingStats,
  ReadingStat,
  BooksPerYear,
  SeriesRecord
} from './types';
import { calculateBooksByYear, calculateStats } from './stats';
import { calculateSeriesStats } from './series-stats';
import readingLog from './data/reading-log';

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
