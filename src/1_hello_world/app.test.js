const supertest = require('supertest');
const http = require('http');
const { app } = require('./app.js');

describe('Hello World! Example Server', () => {
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

    it('GET / should show a "Hello World!"', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World!');
    });
});
