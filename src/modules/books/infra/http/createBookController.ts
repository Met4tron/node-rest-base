import { CreateBookService } from '@modules/books/services/createBook';
import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import { CreateBookBody } from './schemas';

export const createBookController = async (
  req: FastifyRequest<{ Body: CreateBookBody }>,
  reply: FastifyReply
) => {
  const createBookService = container.resolve(CreateBookService);

  const bookId = await createBookService.execute(req.body);

  reply.status(201).send({ message: `Book created with id ${bookId}` });
};
