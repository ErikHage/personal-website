import { Request, Response } from 'express';
import constants from '../helpers/constants';
import rwabService from '../services/red-white-and-brew/red-white-and-brew-service';

function getRedWhiteAndBrewView(request: Request, response: Response) {
  response.render('red-white-and-brew', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      rwabClasses: 'active',
    },
    rwabData: rwabService.getRwabData(),
  });
}

export default {
  getRedWhiteAndBrewView,
};
