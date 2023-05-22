const supertest = require('supertest');
const http = require('http');
const { app } = require('./app.js');

describe('Hello World! endpoint', () => {
    let server;
    let agent;

    beforeAll((done) => {
        server = http.createServer(app);
        server.listen(done);
        agent = supertest.agent(server);
    });

    afterAll(done => {
        server.close(done);
    });

    it('GET / should increment view count"', async () => {
        let res = await agent.get('/').set('Accept', 'text/plain');
        expect(res.text).toEqual('Website was viewed 1 times during current session.\n');

        let test = await agent.get('/').set('Accept', 'text/plain');
        expect(test.text).toEqual('Website was viewed 2 times during current session.\n');
    });
});
