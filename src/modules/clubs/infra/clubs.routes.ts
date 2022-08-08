import { CreateClubController } from '@modules/clubs/useCases/CreateClub/CreateClubController';
import { Router } from 'express';

const createClubController = new CreateClubController();

export const clubsRouter = Router();

clubsRouter.post('/:ownerId', createClubController.handle);
