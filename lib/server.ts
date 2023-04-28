#!/usr/bin/env node

import http from 'http';

import app from './app';

const initApp = () => {
  const onError = (error: any) => {
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

  const onListening = () => {
    const addr = server.address();

    if (typeof addr == 'string') {
      console.log('Listening on pipe ' + addr);
    } else if (addr == null) {
      console.log('server address returned as null');
    } else {
      console.log('Listening on port ' + addr.port);
    }
  };

  const port = process.env.PORT || '8001';
  app.set('port', port);

  const server: http.Server = http.createServer(app);

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
};

initApp();
