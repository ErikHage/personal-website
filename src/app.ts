import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';

import buildRouter from './routes';

const getApp = (appRoot: string, port: string): Express => {
  dotenv.config();

  const app: Express = express();

  app.set('port', port);

  app.use(express.urlencoded({ extended: false, }));
  app.use(express.static(path.join(appRoot, '../../public')));

  app.use('/', buildRouter(appRoot));

  return app;
}

export default getApp;
