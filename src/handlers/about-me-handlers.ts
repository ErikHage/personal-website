import { Request, Response } from 'express';

import constants from '../helpers/constants';
import aboutMeService from '../services/about-me/about-me-service';

function getAboutMe(request: Request, response: Response) {
  response.render('about-me', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      aboutMeClasses: 'active',
    },
    educationData: aboutMeService.getEducationData(),
    achievements: aboutMeService.getAchievementData(),
    hobbies: aboutMeService.getHobbyData(),
  });
}

export default {
  getAboutMeView: getAboutMe,
};
