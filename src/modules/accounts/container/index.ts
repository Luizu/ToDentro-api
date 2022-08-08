import { container } from 'tsyringe';
import { IAccountsRepository } from '../repositories/IAccountsRepository';
import { PrismaAccountsRepository } from '../repositories/PrismaAccountsRepository';

container.registerSingleton<IAccountsRepository>(
  'AccountsRepository',
  PrismaAccountsRepository,
);
