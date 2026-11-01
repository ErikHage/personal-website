import { NextFunction, Request, Response } from 'express';
import constants from '../helpers/constants';

function renderErrorView(response: Response, status: number, heading: string, message: string) {
  response.status(status).render('error', {
    urls: constants.urls,
    nav: {
      ...constants.defaultNavOptions,
    },
    heading,
    message,
  });
}

function getNotFoundView(request: Request, response: Response) {
  renderErrorView(response, 404, 'Page Not Found', 'Sorry, that page doesn\'t exist.');
}

function handleServerError(error: unknown, request: Request, response: Response, next: NextFunction) {
  // eslint-disable-next-line no-console
  console.error(error);

  if (response.headersSent) {
    next(error);
    return;
  }

  renderErrorView(response, 500, 'Something Went Wrong', 'Sorry, something went wrong on our end.');
}

export default {
  getNotFoundView,
  handleServerError,
};
