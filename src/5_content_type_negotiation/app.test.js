const supertest = require('supertest');
const http = require('http');
const { app } = require('./app.js');

describe('Users endpoint content negotiation', () => {
    let server;
    let request;

    beforeAll((done) => {
        server = http.createServer(app);
        server.listen(done);
        request = supertest(server);
    });

    afterAll(done => {
        server.close(done);
    });

    it('GET /users with Content-Type: html should return text/html', async () => {
        const res = await request.get('/users');

        expect(res.status).toEqual(200);
        expect(res.type).toEqual('text/html');
    });

    it('GET /users with Content-Type: text should return text', async () => {
        const res = await request
            .get('/users')
            .set('Accept', 'text/plain');

        expect(res.status).toEqual(200);
        expect(res.type).toEqual('text/plain');
    });

    it('GET /users with Content-Type: json should return application/json', async () => {
        const res = await request
            .get('/users')
            .set('Accept', 'application/json');

        expect(res.status).toEqual(200);
        expect(res.type).toEqual('application/json');
    });
});
