import { WorkData } from './types';
import professionalExperienceDatasource from './professional-experience-datasource';

function getJobData(): WorkData[] {
  return professionalExperienceDatasource.getJobData();
}

function getConsultingData(): WorkData[]  {
  return professionalExperienceDatasource.getConsultingData();
}

export default {
  getJobData,
  getConsultingData,
};
