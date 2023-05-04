import fdmAcademy from './fdm-academy';
import bostonUniversity from './boston-university';
import theCollegeOfNewJersey from './the-college-of-new-jersey';

export interface EducationData {
  schoolName: string,
  schoolLogo: string,
  degree: string,
  completionDate: string,
  accolades?: string,
  description: string,
}

const data: EducationData[] = [
  fdmAcademy,
  bostonUniversity,
  theCollegeOfNewJersey,
];

export default data;
