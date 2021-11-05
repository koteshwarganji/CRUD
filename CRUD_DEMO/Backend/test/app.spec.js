/*Chai being an assertion library provides easy to read syntax and also provide method and functions 
that help to compare the output to the expected value.*/
const { expect } = require('chai');
/*
It is an npm package that provides a high-level abstraction for testing HTTP Requests
*/
const request = require('supertest');

const app = require('../src/app'); /*importing app */

describe('Testing app file',()=>{

    it('testing /setupDB route',async()=>{
        const res = await request(app).get('/setupDB');
        expect(res.statusCode).to.equal(201);
    });
    it('testing /getAllEmployees',async()=>{
        const res = await request(app).get('/getAllEmployees');
        expect(res.body).to.be.not.undefined;
    });
    it('testing /deleteEmployee/:id',async()=>{
        const res = await request(app).delete('/deleteEmployee/1001');
        expect(res.body.message).to.equal('EmployeeId 1001 Employee deleted');
    });
    it('testing /deleteEmployee/:id',async()=>{
        const res = await request(app).delete('/deleteEmployee/1001');
        expect(res.statusCode).to.equal(404);
    });
    it('testing /getEmployee/:id',async()=>{
        const res = await request(app).get('/getEmployee/1002');
        expect(res.statusCode).to.equal(201);
    });
});