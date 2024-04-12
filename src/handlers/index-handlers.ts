import { Request, Response } from 'express';
import constants from '../helpers/constants';

function getIndex(request: Request, response: Response) {
  response.render('index', {
    // todo data here, maybe random photo or project highlights
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
    },
  });
}

export default {
  getIndex,
};
