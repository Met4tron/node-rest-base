import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { createBookController } from './createBookController';
import { CreateBookSchema } from './schemas';

export const bookRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts
) => {
  fastify.post(
    '/',
    {
      schema: CreateBookSchema,
    },
    createBookController
  );
};
