import * as Env from 'env-var';

export const apiConfig = {
  PORT: Env.get('PORT').default(3000).asPortNumber(),
};

export const dbConfig = {
  USER: Env.get('DB_USER').asString(),
  PASS: Env.get('DB_PASS').asString(),
  HOST: Env.get('DB_HOST').asString(),
  DB: Env.get('DB_NAME').asString(),
};

export const jwtConfig = {
  expires: Env.get('JWT_EXPIRES').asString(),
  secret: Env.get('JWT_SECRET').asString(),
};
