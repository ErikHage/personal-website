import { Request, Response } from 'express';
import constants from '../helpers/constants';
import personalProjectsService from '../services/personal-projects/personal-projects-service';
import skillColorMap from '../helpers/skill-color-map';

function getIndex(request: Request, response: Response) {
  response.render('index', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
    },
    skillColorMap,
    highlights: {
      photos: [],
      project: personalProjectsService.getRandomProject(),
    },
  });
}

export default {
  getIndexView: getIndex,
};
