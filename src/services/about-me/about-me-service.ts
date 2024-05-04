import { EducationData, Achievement, Hobby } from './types';

import aboutMeDatasource from './about-me-datasource';

function getEducationData(): EducationData[] {
  return aboutMeDatasource.getEducationData();
}

function getAchievementData(): Achievement[] {
  return aboutMeDatasource.getAchievementData();
}

function getHobbyData(): Hobby[] {
  return aboutMeDatasource.getHobbyData();
}

export default {
  getEducationData,
  getAchievementData,
  getHobbyData,
};
