import { container } from 'tsyringe';
import { BookRepository } from '@modules/books/infra/db/bookRepository';
import { BookRepositoryFake } from '@modules/books/infra/db/fakes/bookRepositoryFake';
import { CreateBookService } from '@modules/books/services/createBook';
import { CreateBookDTO } from '@modules/books/domain/dto/CreateBookDTO';
import { faker } from '@faker-js/faker';

describe('CreateBookService tests', () => {
  let service: CreateBookService;

  let mockDto: CreateBookDTO = {
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraph(),
    isbn: faker.datatype.uuid(),
    pages: 200,
    status: 'READ',
  };

  beforeEach(() => {
    container.registerSingleton('bookRepository', BookRepositoryFake);

    service = container.resolve(CreateBookService);
  });

  it('should call bookRepository with right params', async () => {
    const spyRepo = jest.spyOn(BookRepositoryFake.prototype, 'create').mockResolvedValue('id');

    const response = await service.execute(mockDto);
  
    expect(spyRepo).toHaveBeenCalledTimes(1)
    expect(spyRepo).toHaveBeenCalledWith(mockDto)
  });
});
