import creditSuisse from './jobs/credit-suisse';
import automaticDataProcessing from './jobs/automatic-data-processing';
import automatedMiningOperationsSoftware from './jobs/automated-mining-operations-software';
import redWhiteAndBrew from './gigs/red-white-and-brew';
import cannonballCompany from './gigs/cannonball-company';
import theCollegeOfNewJerseyAdjunct from './jobs/the-college-of-new-jersey-adjunct';
import berkeleySweetShops from './jobs/berkeley-sweet-shops';
import friendlys from './jobs/friendlys';
import theCollegeOfNewJerseyResearcher from './jobs/the-college-of-new-jersey-researcher';
import lmaxGroup from './jobs/lmax-group';

interface ProfessionalExperienceData {
  jobData: WorkData[],
  consultingData: WorkData[],
}

export interface WorkData {
  companyName: string,
  companyLogo? : string,
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
    lmaxGroup,
    automatedMiningOperationsSoftware,
    automaticDataProcessing,
    creditSuisse,
    theCollegeOfNewJerseyAdjunct,
    theCollegeOfNewJerseyResearcher,
    friendlys,
    berkeleySweetShops,
  ],
  consultingData: [
    redWhiteAndBrew,
    cannonballCompany,
  ],
};

export default data;
