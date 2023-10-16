const supertest = require('supertest');
const app = require('./app');

describe('POST /', () => {
    test('should return a successful response', async () => {
        const res = await supertest(app).post('/')
            .send(
                {
                    'developers': ["theara-y", "elie"]
                }
            )

        expect(res.status).toBe(200);
        expect(res.body).toEqual([
            {
                "bio": null,
                "name": null
            },
            {
                "bio": "Co-founder + Lead Instructor @rithmschool ",
                "name": "Elie Schoppik"
            }
        ])
    });
});