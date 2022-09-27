import 'reflect-metadata';
import { application } from '@infra/app';
import { connectDatabase } from '@infra/db/connection';
import { apiConfig } from '@config/environment';

async function bootrstrap() {
  try {
    await connectDatabase();
    await application.ready();

    await application.listen({
      port: apiConfig.PORT,
    });
  } catch (error) {
    application.log.error(error);
  }
}

bootrstrap();
