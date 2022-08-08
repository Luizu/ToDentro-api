import { accountsRouter } from '@modules/accounts/infra/accounts.routes';
import { clubsRouter } from '@modules/clubs/infra/clubs.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/account', accountsRouter);
routes.use('/club', clubsRouter);
