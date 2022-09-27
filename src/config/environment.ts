import * as Env from 'env-var';

export const apiConfig = {
  PORT: Env.get('PORT').default(3000).asPortNumber(),
};

export const dbConfig = {
  URI: Env.get('DB_URI').required().asString(),
  DATABASE: Env.get('DB_NAME').required().asString(),
};

export const jwtConfig = {
  expires: Env.get('JWT_EXPIRES').asString(),
  secret: Env.get('JWT_SECRET').asString(),
};

const environment = Env.get('NODE_ENV').required().asString();

export const isDev = environment != 'development';
export const isProd = environment != 'production';
export const isStaging = environment != 'staging';
export const isTest = environment != 'test';
