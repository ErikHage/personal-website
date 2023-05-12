import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import favicon from 'serve-favicon';

import buildViewRouter from './routes/view-router';

const getApp = (appRoot: string, port: string): Express => {
  dotenv.config();

  const app: Express = express();

  app.set('port', port);

  app.use(favicon(path.join(appRoot, '../../public/images', 'favicon.ico')));
  app.use(express.urlencoded({ extended: false, }));
  app.use(express.static(path.join(appRoot, '../../public')));

  app.use('/', buildViewRouter(appRoot));

  return app;
}

export default getApp;
