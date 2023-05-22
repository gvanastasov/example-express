const supertest = require('supertest');
const http = require('http');
const { app } = require('./app.js');

describe('Cookie Example Server', () => {
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

    it('POST / sets cookie', async () => {
        const res = await agent
            .post('/')
            .type('application/x-www-form-urlencoded')
            .send('remember=on');
        const cookies = res.headers['set-cookie']

        expect(cookies).toEqual(
            expect.arrayContaining([
                expect.stringContaining('remember=1')
            ])
        )
    });
});
