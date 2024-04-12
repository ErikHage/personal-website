import { Request, Response } from 'express';
import constants from '../helpers/constants';
import readingData from '../data/about-me/reading';

// todo extract types from here and view-router
interface NavOptions {
  aboutMeClasses: string,
  professionalExperienceClasses: string,
  personalProjectsClasses: string,
  rwabClasses: string,
}

// todo extract as const
const defaultNavOptions: NavOptions = {
  aboutMeClasses: '',
  professionalExperienceClasses: '',
  personalProjectsClasses: '',
  rwabClasses: '',
};

function getReadingLog(request: Request, response: Response) {
  response.render('reading-log', {
    urls: constants.urls,
    nav: {
      ...defaultNavOptions,
      aboutMeClasses: 'active',
    },
    readingLog: readingData.readingLog,
  });
}

function getReadingStats(request: Request, response: Response) {
  response.render('reading-stats', {
    urls: constants.urls,
    nav: {
      ...defaultNavOptions,
      aboutMeClasses: 'active',
    },
    readingData,
  });
}

export default {
  getReadingLog,
  getReadingStats,
};
