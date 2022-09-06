import { application } from '@infra/app';

async function bootrstrap() {
  try {
    await application.ready();

    await application.listen({
      port: 3000,
    });
  } catch (error) {
    console.log(error);

    application.log.error(error);
  }
}

bootrstrap();
