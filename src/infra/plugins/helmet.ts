import fastifyHelmet from '@fastify/helmet';
import { FastifyInstance, FastifyPluginAsync } from 'fastify';

export const helmetPlugin: FastifyPluginAsync = async (
  app: FastifyInstance,
  options
) => {
  app.register(fastifyHelmet, {
    hidePoweredBy: true,
  });
};
