import { Account } from '@prisma/client';
import { ICreateAccountDTO } from '../dtos/IAccountDTO';

export interface IAccountsRepository {
  create(data: ICreateAccountDTO): Promise<Account>;
  findById(id: string): Promise<Account>;
  findByEmail(email: string): Promise<Account>;
}
