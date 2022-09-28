import { bookRoutes } from '@modules/books/infra/http';
import { FastifyInstance, FastifyPluginAsync } from 'fastify';

export const apiRoutes: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  options
) => {
  fastify.register(bookRoutes, {
    prefix: '/books',
  });
};
