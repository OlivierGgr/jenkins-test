const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
    it('should respond Henlo world', (done) => {
        request(app).get('/').expect('Henlo world', done)
    })
})