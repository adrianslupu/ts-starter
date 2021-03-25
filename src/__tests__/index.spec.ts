import request from 'supertest';

import createServer from '../server';

const app = createServer();

describe('server is running', () => {
  it('should return status 200', () => {
    return request(app).get('/').expect(200);
  });
});

describe('users routes should be registered', () => {
  it('/users should return 200', () => {
    return request(app).get('/users').expect(200);
  });
});
