import creditSuisse from './jobs/credit-suisse';
import automaticDataProcessing from './jobs/automatic-data-processing';
import automatedMiningOperationsSoftware from './jobs/automated-mining-operations-software';
import redWhiteAndBrew from './gigs/red-white-and-brew';
import cannonballCompany from './gigs/cannonball-company';

interface ProfessionalExperienceData {
  jobData: WorkData[],
  consultingData: WorkData[],
}

export interface WorkData {
  companyName: string,
  jobTitles: JobTitle[],
  summary: string,
  projects: Project[],
}

export interface JobTitle {
  title: string,
  tenure: string,
}

export interface Project {
  title: string,
  summary: string,
  skillsUsed: string[],
}

const data: ProfessionalExperienceData = {
  jobData: [
    automatedMiningOperationsSoftware,
    automaticDataProcessing,
    creditSuisse,
  ],
  consultingData: [
    redWhiteAndBrew,
    cannonballCompany,
  ],
};

export default data;
