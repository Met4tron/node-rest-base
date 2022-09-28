import { BookRepository } from '@modules/books/infra/db/bookRepository';
import { container } from 'tsyringe';

container.registerSingleton('bookRepository', BookRepository);
