require('dotenv').config();
const request = require('supertest');
const app = require('../src/app');
// const db = require('../src/utils/db');

// afterAll(async () => {
//   await db.pool.end();
// });

describe('Smoke Tests', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /metrics returns metrics', async () => {
    const res = await request(app).get('/metrics');
    expect(res.status).toBe(200);
    expect(res.text).toContain('http_requests_total');
  });
});

describe('Auth Tests', () => {
  test('POST /api/auth/register creates user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'securepass123' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  test('POST /api/auth/login returns JWT', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'securepass123' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  test('GET /api/auth/me requires auth', async () => {
    const res = await request(app).get('/api/auth/me');
    expect(res.status).toBe(401);
  });
});
