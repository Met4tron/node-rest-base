import { CreateBookDTO } from '../dto/CreateBookDTO';

export interface IBookRepository {
  create(book: CreateBookDTO): Promise<string>;
}
