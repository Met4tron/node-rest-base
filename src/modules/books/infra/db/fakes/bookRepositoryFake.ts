import { CreateBookDTO } from '@modules/books/domain/dto/CreateBookDTO';
import { IBookRepository } from '@modules/books/domain/repositories/IBookRepository';

export class BookRepositoryFake implements IBookRepository {
  create(book: CreateBookDTO): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
