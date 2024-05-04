import { EducationData, Achievement, Hobby } from './types';

import fdmAcademy from './data/education/fdm-academy';
import bostonUniversity from './data/education/boston-university';
import theCollegeOfNewJersey from './data/education/the-college-of-new-jersey';
import achievements from './data/achievements';
import hobbyData from './data/hobbies';

function getEducationData(): EducationData[] {
  return [
    fdmAcademy,
    bostonUniversity,
    theCollegeOfNewJersey,
  ];
}

function getAchievementData(): Achievement[] {
  return achievements;
}

function getHobbyData(): Hobby[] {
  return hobbyData;
}

export default {
  getEducationData,
  getAchievementData,
  getHobbyData,
};
