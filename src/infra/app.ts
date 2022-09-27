import './container';
import fastify from 'fastify';
import { randomUUID } from 'node:crypto';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { corsPlugin, helmetPlugin, swaggerPlugin } from './plugins';
import { apiRoutes } from './routes';

const application = fastify({
  logger: true,
  genReqId(req) {
    return randomUUID();
  },
}).withTypeProvider<TypeBoxTypeProvider>();

application.register(corsPlugin);
application.register(helmetPlugin);
application.register(swaggerPlugin);
application.register(apiRoutes, {
  prefix: '/v1',
});

export { application };
