const supertest = require('supertest');
const http = require('http');
const { app } = require('./app.js');

describe('Static Routing Example Server', () => {
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

    it('GET /static/main.css should return 200 and stylesheet resource', async () => {
        const res = await request.get('/static/main.css');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual('text/css');
    });

    it('GET /main.css should return 404 due to missing virtual path prefix.', async() => {
        const res = await request.get('/main.css');
        expect(res.status).toEqual(404);
    })

    it('GET /static/404.css should return 404', async() => {
        const res = await request.get('/static/404.css');
        expect(res.status).toEqual(404);
    })
});
