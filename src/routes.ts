import Router, { Express, Request, Response } from 'express';

import constants from './helpers/constants';
import path from 'path';

const router: Express = Router();

const buildRouter = (appRoot: string): Express => {
  router.set('view engine', 'ejs');
  router.set('views', path.join(appRoot, '../templates'));

  router.get('/', (request: Request, response: Response) => {
    response.render('index', {
      // todo data here, maybe random photo or project highlights
      constants,
    });
  });

  return router;
};

export default buildRouter;
