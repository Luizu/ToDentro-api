import { ICreateAccountDTO } from '@modules/accounts/dtos/IAccountDTO';
import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';
import { Account } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountRepository: IAccountsRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateAccountDTO): Promise<Account> {
    if (!name || !email || !password) {
      throw new AppError('Missing data to create an account', 403);
    }

    let account = await this.accountRepository.findByEmail(email);

    if (account) throw new AppError('Email already in use', 409);

    account = await this.accountRepository.create({
      name,
      email,
      password,
    });

    return account;
  }
}
