import { Type, Static } from '@sinclair/typebox';
import { FastifySchema } from 'fastify';

const CreateBookBody = Type.Object({
  title: Type.String(),
  description: Type.String(),
  isbn: Type.String(),
  pages: Type.Number({
    minimum: 1,
  }),
  status: Type.String(),
});

export const CreateBookSchema: FastifySchema = {
  body: CreateBookBody,
};

export type CreateBookBody = Static<typeof CreateBookBody>;
