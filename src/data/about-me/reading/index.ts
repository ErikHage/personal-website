import { Reading } from './types';
import readingLog from './reading-log';

const data: Reading = {
  readingLog: readingLog.sort((a, b) => {
    return b.start.getTime() - a.start.getTime();
  }),
};

export default data;

