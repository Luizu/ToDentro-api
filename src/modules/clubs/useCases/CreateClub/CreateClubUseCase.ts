import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';
import { ICreateClubDTO } from '@modules/clubs/dtos/IClubDTO';
import { IClubsRepository } from '@modules/clubs/repositories/IClubsRepository';
import { Club } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateClubUseCase {
  constructor(
    @inject('ClubsRepository')
    private clubsRepository: IClubsRepository,
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute({
    name,
    description,
    ownerId,
  }: ICreateClubDTO): Promise<Club> {
    if (!name || !description || !ownerId)
      throw new AppError('Missing data', 403);

    const account = await this.accountsRepository.findById(ownerId);

    if (!account) throw new AppError('Account not found', 404);

    let club = await this.clubsRepository.findByName(name);

    if (club) throw new AppError('Club already exists', 409);

    club = await this.clubsRepository.create({
      name,
      description,
      ownerId,
    });

    return club;
  }
}
