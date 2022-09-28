import { inject, injectable } from 'tsyringe';
import { CreateBookDTO } from '../domain/dto/CreateBookDTO';
import { IBookRepository } from '../domain/repositories/IBookRepository';

@injectable()
export class CreateBookService {
  constructor(
    @inject('bookRepository') private bookRepository: IBookRepository
  ) {}

  async execute(data: CreateBookDTO): Promise<string> {
    return this.bookRepository.create(data);
  }
}
