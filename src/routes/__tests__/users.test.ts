import createServer from '../../server';
import request from 'supertest';

const app = createServer();

describe('Users routes', () => {
  test('GET /users should return status 200', (done) => {
    return request(app)
      .get('/users')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  test('POST /users should return status 200', (done) => {
    return request(app)
      .post('/users')
      .send({ name: 'Johnny Boy' })
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
