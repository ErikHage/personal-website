import creditSuisse from './jobs/credit-suisse';
import redWhiteAndBrew from './gigs/red-white-and-brew';

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
    creditSuisse,
  ],
  consultingData: [
    redWhiteAndBrew,
  ],
};

export default data;
