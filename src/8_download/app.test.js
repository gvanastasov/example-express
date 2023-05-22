const supertest = require('supertest');
const http = require('http');
const { app } = require('./app.js');

describe('Download Example Server', () => {
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

    it('GET /files/:file returns binary', async () => {
        const res = await request
            .get('/files/text_1.txt')
            .buffer()
            .parse((r, cb) => {
                r.setEncoding('binary');
                r.data = '';
                r.on('data', chunk => { r.data += chunk })
                r.on('end', () => { cb(null, Buffer.from(r.data, 'binary')) })
            })
        expect(res.body.toString()).toEqual('text_1 contents...');
    });
});
