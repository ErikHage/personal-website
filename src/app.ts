import express, { Express } from 'express';
import helmet from 'helmet';
import path from 'path';
import favicon from 'serve-favicon';

import errorHandlers from './handlers/error-handlers';
import buildViewRouter from './routes/view-router';

const getApp = (appRoot: string): Express => {
  const app: Express = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(appRoot, '../templates'));

  app.use(helmet({
    // Cloudflare terminates TLS, so HSTS belongs there.
    strictTransportSecurity: false,
    contentSecurityPolicy: {
      directives: {
        scriptSrc: [
          "'self'",
          'https://cdn.jsdelivr.net',
          'https://kit.fontawesome.com',
          // Cloudflare injects its analytics beacon into pages that browsers load.
          'https://static.cloudflareinsights.com',
        ],
        connectSrc: [ "'self'", 'https://ka-f.fontawesome.com', ],
        upgradeInsecureRequests: null,
      },
    },
  }));
  app.use(favicon(path.join(appRoot, '../../public/images', 'favicon.ico')));
  app.use(express.static(path.join(appRoot, '../../public')));

  app.use('/', buildViewRouter());

  app.use(errorHandlers.getNotFoundView);
  app.use(errorHandlers.handleServerError);

  return app;
}

export default getApp;
