import { Account } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';
import { ICreateAccountDTO } from '../dtos/IAccountDTO';
import { IAccountsRepository } from './IAccountsRepository';

export class PrismaAccountsRepository implements IAccountsRepository {
  private ormRepository = prisma.account;

  public async create(data: ICreateAccountDTO): Promise<Account> {
    const account = await this.ormRepository.create({
      data,
    });

    return account;
  }

  public async findById(id: string): Promise<Account> {
    const account = await this.ormRepository.findUnique({
      where: { id },
    });

    return account;
  }

  public async findByEmail(email: string): Promise<Account> {
    const account = await this.ormRepository.findUnique({ where: { email } });

    return account;
  }
}
