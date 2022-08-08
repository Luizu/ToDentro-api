import { Club } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';
import { ICreateClubDTO } from '../dtos/IClubDTO';
import { IClubsRepository } from './IClubsRepository';

export class PrismaClubsRepository implements IClubsRepository {
  private ormRepository = prisma.club;

  public async create(data: ICreateClubDTO): Promise<Club> {
    const club = await this.ormRepository.create({
      data,
    });

    return club;
  }

  public async findById(id: string): Promise<Club> {
    const club = await this.ormRepository.findUnique({
      where: { id },
      include: { owner: true },
    });

    return club;
  }

  public async findByName(name: string): Promise<Club> {
    const club = await this.ormRepository.findUnique({ where: { name } });

    return club;
  }

  public async findAllClubs(): Promise<Club[]> {
    const clubs = await this.ormRepository.findMany();

    return clubs;
  }
}
