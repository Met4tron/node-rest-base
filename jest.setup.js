require('reflect-metadata');
require('dotenv');

process.env = Object.assign({}, process.env, {
  NODE_ENV: "test",
  DB_URI: 'testt',
  DB_NAME: 'testt'
})