const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const model = require('../src/model/data');

describe('Testing model file',()=>{
    it('testing insertScript method',async()=>{
        expect(await model.insertScript()).to.be.not.null;
    });
    it('testing getAllEmployees method',async()=>{
        expect(await model.getAllEmployees()).to.be.not.null;
    });
    it('testing deleteEmployee method',async()=>{
        expect(await model.deleteEmployee(1001)).to.be.not.null;
    });
    it('testing deleteEmployee method',async()=>{
        expect(await model.deleteEmployee(1001)).to.be.null;
    });
    it('testing readEmployee method',async()=>{
        expect(await model.readEmployee(1002)).to.be.not.null;
    });
});