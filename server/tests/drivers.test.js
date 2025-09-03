// tests/drivers.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /api/drivers', () => {
  it('should return drivers', async () => {
    const res = await request(app).get('/api/drivers');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
