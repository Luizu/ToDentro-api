import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllClubsUseCase } from './FindAllClubsUseCase';

export class FindAllClubsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const findAllClubsUseCase = container.resolve(FindAllClubsUseCase);

    const clubs = await findAllClubsUseCase.execute();

    return response.status(200).json(clubs);
  }
}
