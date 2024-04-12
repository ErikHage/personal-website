import { Request, Response } from 'express';
import constants from '../helpers/constants';
import educationData from '../data/about-me/education';
import achievements from '../data/about-me/achievements';
import hobbies from '../data/about-me/hobbies';

function getAboutMe(request: Request, response: Response) {
  response.render('about-me', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      aboutMeClasses: 'active',
    },
    educationData,
    achievements,
    hobbies,
  });
}

export default {
  getAboutMeView: getAboutMe,
};
