import { container } from 'tsyringe';
import { IClubsRepository } from '../repositories/IClubsRepository';
import { PrismaClubsRepository } from '../repositories/PrismaClubsRepository';

container.registerSingleton<IClubsRepository>(
  'ClubsRepository',
  PrismaClubsRepository,
);
