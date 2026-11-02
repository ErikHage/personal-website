#!/usr/bin/env node
/* eslint-disable no-console */

import http from 'http';
import path from 'path';

import getApp from './app';

const onError = (port: string) => (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = (port: string) => () => {
    console.log('Listening on port ' + port);
};

const initApp = () => {
  const appRoot = path.resolve(__dirname);
  const port = process.env.PORT || '8001';

  console.log(`trying to start app on port ${port}`);
  console.log(`app root is ${appRoot}`);

  const app = getApp(appRoot);

  const server = http.createServer(app)
    .listen(port)
    .on('error', onError(port))
    .on('listening', onListening(port));

  // As PID 1 in Docker, node ignores these signals unless it handles them itself.
  const shutDown = () => server.close(() => process.exit(0));
  process.on('SIGTERM', shutDown);
  process.on('SIGINT', shutDown);
};

initApp();
