import { getCollection } from '@infra/db/connection';
import { CreateBookDTO } from '@modules/books/domain/dto/CreateBookDTO';
import { IBookRepository } from '@modules/books/domain/repositories/IBookRepository';
import { injectable } from 'tsyringe';

@injectable()
export class BookRepository implements IBookRepository {
  _collection = getCollection('books');

  async create(data: CreateBookDTO) {
    const result = await this._collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return result.insertedId.toHexString();
  }
}
