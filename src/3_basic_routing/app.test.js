const supertest = require('supertest');
const http = require('http');
const { app } = require('./app.js');

describe('verb endpoint', () => {
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

    ['get', 'post', 'patch', 'put', 'delete'].forEach(verb => {
        it(`${verb.toUpperCase()} / should show a "${verb}"`, async () => {
            const res = await request[verb]('/');
            expect(res.status).toEqual(200);
            expect(res.text).toEqual(verb);
        });
    })
});
