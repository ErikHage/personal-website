import { Request, Response } from 'express';
import constants from '../helpers/constants';
import personalProjectsService from '../services/personal-projects/personal-projects-service';
import skillColorMap from '../helpers/skill-color-map';

function getPersonalProjectsView(request: Request, response: Response) {
  response.render('personal-projects', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
      personalProjectsClasses: 'active',
    },
    personalProjects: personalProjectsService.getPersonalProjects(),
    skillColorMap,
  });
}

export default {
  getPersonalProjectsView,
};
