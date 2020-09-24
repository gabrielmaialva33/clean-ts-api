import SignUpController from './signup';
import { MissingParamError } from '../errors/missing-param-error';

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpResquest = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpResquest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });
});

describe('SignUp Controller', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController();
    const httpResquest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpResquest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  });
});

describe('SignUp Controller', () => {
  test('Should return 400 if no pessword is provided', () => {
    const sut = new SignUpController();
    const httpResquest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        passwordConfirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpResquest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('password'));
  });
});
describe('SignUp Controller', () => {
  test('Should return 400 if no pessword confirmation is provided', () => {
    const sut = new SignUpController();
    const httpResquest = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpResquest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError('passwordConfirmation'),
    );
  });
});
