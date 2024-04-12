import { Request, Response } from 'express';
import constants from '../helpers/constants';
import readingData from '../data/about-me/reading';

function getReadingLog(request: Request, response: Response) {
  response.render('reading-log', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      aboutMeClasses: 'active',
    },
    readingLog: readingData.readingLog,
  });
}

function getReadingStats(request: Request, response: Response) {
  response.render('reading-stats', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      aboutMeClasses: 'active',
    },
    readingData,
  });
}

export default {
  getReadingLog,
  getReadingStats,
};
