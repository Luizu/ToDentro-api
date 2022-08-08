import { IClubsRepository } from '@modules/clubs/repositories/IClubsRepository';
import { Club } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindClubByIdUseCase {
  constructor(
    @inject('ClubsRepository')
    private clubsRepository: IClubsRepository,
  ) {}

  public async execute(id: string): Promise<Club> {
    const club = this.clubsRepository.findById(id);

    if (!club) throw new AppError('Club not found', 404);

    return club;
  }
}
