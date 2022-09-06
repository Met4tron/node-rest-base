import fastifyCors from '@fastify/cors';
import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from 'fastify';

export const corsPlugin: FastifyPluginAsync = async (
  app: FastifyInstance,
  options: FastifyPluginOptions
) => {
  app.register(fastifyCors, {});
};
