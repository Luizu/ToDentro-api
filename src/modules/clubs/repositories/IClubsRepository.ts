import { Club } from '@prisma/client';
import { ICreateClubDTO } from '../dtos/IClubDTO';

export interface IClubsRepository {
  create: (data: ICreateClubDTO) => Promise<Club>;
  findById: (id: string) => Promise<Club>;
  findByName: (name: string) => Promise<Club>;
  findAllClubs(): Promise<Club[]>;
}
