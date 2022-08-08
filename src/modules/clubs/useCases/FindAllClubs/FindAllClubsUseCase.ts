import { IClubsRepository } from '@modules/clubs/repositories/IClubsRepository';
import { Club } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindAllClubsUseCase {
  constructor(
    @inject('ClubsRepository')
    private clubsRepository: IClubsRepository,
  ) {}

  public async execute(): Promise<Club[]> {
    const clubs = this.clubsRepository.findAllClubs();

    return clubs;
  }
}
