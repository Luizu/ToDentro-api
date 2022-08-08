import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateClubUseCase } from './CreateClubUseCase';

export class CreateClubController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { ownerId } = request.params;
    const { name, description } = request.body;

    const createClubUseCase = container.resolve(CreateClubUseCase);

    const club = await createClubUseCase.execute({
      name,
      description,
      ownerId,
    });

    return response.status(201).json(club);
  }
}
