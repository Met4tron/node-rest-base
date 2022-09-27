import { dbConfig } from '@config/environment';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(dbConfig.URI);
let isConnected = false;

export const connectDatabase = async () => {
  await mongoClient.connect();
  isConnected = true;
};

export const disconnectDatabase = async () => {
  await mongoClient.close();
};

export const getCollection = (collectionName: string) => {
  if (!isConnected) {
    throw new Error('Fail to get collection');
  }

  return mongoClient.db(dbConfig.DATABASE).collection(collectionName);
};
