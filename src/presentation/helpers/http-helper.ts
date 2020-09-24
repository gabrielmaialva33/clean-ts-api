import { HttpResponse } from '../protocols/http';

// eslint-disable-next-line import/prefer-default-export
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});
