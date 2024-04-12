import { Request, Response } from 'express';
import constants from '../helpers/constants';
import personalProjects from '../data/personal-projects';
import skillColorMap from '../helpers/skill-color-map';

function getPersonalProjectsView(request: Request, response: Response) {
  response.render('personal-projects', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      personalProjectsClasses: 'active',
    },
    personalProjects,
    skillColorMap,
  });
}

export default {
  getPersonalProjectsView,
};
