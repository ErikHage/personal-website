import { EducationData, Achievement, Hobby } from './types';

import fdmAcademy from '../../data/about-me/education/fdm-academy';
import bostonUniversity from '../../data/about-me/education/boston-university';
import theCollegeOfNewJersey from '../../data/about-me/education/the-college-of-new-jersey';
import achievements from '../../data/about-me/achievements';
import hobbyData from '../../data/about-me/hobbies';

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
