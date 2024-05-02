import { WorkData } from './types';

import data from './data';

function getJobData(): WorkData[] {
  return data.jobs;
}

function getConsultingData(): WorkData[]  {
  return data.consulting;
}

export default {
  getJobData,
  getConsultingData,
};
