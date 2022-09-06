import fastify from 'fastify';
import { randomUUID } from 'node:crypto';
import { corsPlugin, helmetPlugin } from './plugins';

const application = fastify({
  logger: true,
  genReqId(req) {
    return randomUUID();
  },
});

application.register(corsPlugin);
application.register(helmetPlugin);

export { application };
