import { Request, Response } from 'express';
import constants from '../helpers/constants';
import rwabData from '../data/red-white-and-brew';

function getRedWhiteAndBrewView(request: Request, response: Response) {
  response.render('red-white-and-brew', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      rwabClasses: 'active',
    },
    rwabData,
  });
}

export default {
  getRedWhiteAndBrewView,
};
