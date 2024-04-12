import Router, { Express } from 'express';
import path from 'path';

import indexHandlers from '../handlers/index-handlers';
import readingHandlers from '../handlers/reading-handlers';
import aboutMeHandlers from '../handlers/about-me-handlers';
import professionalExperienceHandlers from '../handlers/professional-experience-handlers';
import personalProjectsHandlers from '../handlers/personal-projects-handlers';
import redWhiteAndBrewHandlers from '../handlers/red-white-and-brew-handlers';

const router: Express = Router();

const buildViewRouter = (appRoot: string): Express => {
  router.set('view engine', 'ejs');
  router.set('views', path.join(appRoot, '../templates'));

  router.get('/', indexHandlers.getIndexView);
  router.get('/about-me', aboutMeHandlers.getAboutMeView);
  router.get('/professional-experience', professionalExperienceHandlers.getProfessionalExperienceView);
  router.get('/personal-projects', personalProjectsHandlers.getPersonalProjectsView);
  router.get('/red-white-and-brew', redWhiteAndBrewHandlers.getRedWhiteAndBrewView);
  router.get('/reading/log', readingHandlers.getReadingLogView);
  router.get('/reading/stats', readingHandlers.getReadingStatsView);

  return router;
};

export default buildViewRouter;
