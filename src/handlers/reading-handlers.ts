import { Request, Response } from 'express';
import constants from '../helpers/constants';
import readingService from '../services/reading/reading-service';

function getReadingLogView(request: Request, response: Response) {
  response.render('reading-log', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      aboutMeClasses: 'active',
    },
    readingLog: readingService.getReadingLog(),
  });
}

function getReadingStatsView(request: Request, response: Response) {
  response.render('reading-stats', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      aboutMeClasses: 'active',
    },
    readingData: readingService.getReadingStats(),
  });
}

export default {
  getReadingLogView: getReadingLogView,
  getReadingStatsView: getReadingStatsView,
};
