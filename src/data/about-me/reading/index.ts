import { BookRecord, Reading } from './types';
import readingLog from './reading-log';
import { calculateStats, calculateBooksByYear } from './stats';

function sortLogDescending(a: BookRecord, b: BookRecord) {
  return b.start.getTime() - a.start.getTime();
}

const data: Reading = {
  readingLog: readingLog.sort(sortLogDescending),
  stats: calculateStats(readingLog),
  booksByYear: calculateBooksByYear(readingLog),
};

export default data;

