import Router, { Express, Request, Response } from 'express';
import path from 'path';

import constants from '../helpers/constants';
import professionalExperience from '../data/professional-experience';
import personalProjects from '../data/personal-projects';
import skillColorMap from '../helpers/skill-color-map';
import educationData from '../data/about-me/education';
import achievements from '../data/about-me/achievements';

interface NavOptions {
  aboutMeClasses: string,
  professionalExperienceClasses: string,
  personalProjectsClasses: string,
  rwabClasses: string,
}

const router: Express = Router();

const defaultNavOptions: NavOptions = {
  aboutMeClasses: '',
  professionalExperienceClasses: '',
  personalProjectsClasses: '',
  rwabClasses: '',
};

const buildViewRouter = (appRoot: string): Express => {
  router.set('view engine', 'ejs');
  router.set('views', path.join(appRoot, '../templates'));

  router.get('/', (request: Request, response: Response) => {
    response.render('index', {
      // todo data here, maybe random photo or project highlights
      urls: constants.urls,
      nav: {
        ...defaultNavOptions,
      },
    });
  });

  router.get('/about-me', (request: Request, response: Response) => {
    response.render('about-me', {
      urls: constants.urls,
      nav: {
        ...defaultNavOptions,
        aboutMeClasses: 'active',
      },
      achievements,
      educationData,
    });
  });

  router.get('/professional-experience', (request: Request, response: Response) => {
    response.render('professional-experience', {
      urls: constants.urls,
      nav: {
        ...defaultNavOptions,
        professionalExperienceClasses: 'active',
      },
      professionalExperience,
      skillColorMap,
    });
  });

  router.get('/personal-projects', (request: Request, response: Response) => {
    response.render('personal-projects', {
      urls: constants.urls,
      nav: {
        ...defaultNavOptions,
        personalProjectsClasses: 'active',
      },
      personalProjects,
      skillColorMap,
    });
  });

  router.get('/red-white-and-brew', (request: Request, response: Response) => {
    response.render('red-white-and-brew', {
      urls: constants.urls,
      nav: {
        ...defaultNavOptions,
        rwabClasses: 'active',
      },
    });
  });

  return router;
};

export default buildViewRouter;
