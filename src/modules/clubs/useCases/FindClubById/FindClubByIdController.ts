import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindClubByIdUseCase } from './FindClubByIdUseCase';

export class FindAllClubsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findClubByIdUseCase = container.resolve(FindClubByIdUseCase);

    const clubs = await findClubByIdUseCase.execute(id);

    return response.status(200).json(clubs);
  }
}
