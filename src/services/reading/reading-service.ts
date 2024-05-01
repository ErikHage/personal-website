import { BookRecord, ReadingStats, SeriesRecord } from './types';
import readingDatasource from './reading-datasource';

function getReadingLog(): BookRecord[] {
  return readingDatasource.getReadingLog();
}

function getReadingStats(): ReadingStats {
  return readingDatasource.getReadingStats();
}

function getSeriesStats(): SeriesRecord[] {
  return readingDatasource.getSeriesStats();
}

export default {
  getReadingLog,
  getReadingStats,
  getSeriesStats,
};
