// tests/races.test.js
process.env.NODE_ENV = 'test';
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const request = require('supertest');
const app = require('../app');

describe('Races API', () => {
  it('GET /api/races - should return all races', async () => {
    const res = await request(app).get('/api/races');
    console.log('status:', res.status, 'body:', res.body);
  expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('date');
  });

  it('GET /api/races/:id/results - should return results for a race', async () => {
    // Get id of the first race
    const racesRes = await request(app).get('/api/races');
    const raceId = racesRes.body[0] && racesRes.body[0].id;
    expect(raceId).toBeDefined();
    const res = await request(app).get(`/api/races/${raceId}/results`);
  expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('position');
      expect(res.body[0]).toHaveProperty('driver_name');
      expect(res.body[0]).toHaveProperty('team_name');
      expect(res.body[0]).toHaveProperty('points');
    }
  });
});
