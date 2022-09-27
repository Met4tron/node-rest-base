import fastifySwagger from '@fastify/swagger';
import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from 'fastify';
import { isProd, isTest } from '@config/environment';

export const swaggerPlugin: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Fastify Boilerplate API',
        version: '1.0.0',
        license: {
          name: 'MIT',
        },
      },
      host: 'localhost',
      schemes: ['http'],
      securityDefinitions: {},
      tags: [],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: !isProd && !isTest,
  });
};
