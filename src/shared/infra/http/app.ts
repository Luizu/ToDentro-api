import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';

import '@shared/container';
import { AppError } from '@shared/errors/AppError';
import { customCss } from '@utils/swaggerCss';
import { routes } from './routes';
import swaggerFile from './swagger.json';

export const app = express();

app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    customCss,
    customSiteTitle: 'ToDentro Docs',
  }),
);

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
