const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const service = require('../src/service/data');

describe('Testing service file',()=>{
    it('testing insertScript method',async()=>{
        expect(await service.insertScript()).to.be.not.undefined;
    });
    it('testing getAllEmployees method',async()=>{
        expect(await service.getAllEmployees()).to.be.not.undefined;
    });
    it('testing deleteEmployee method',async()=>{
        expect(await service.deleteEmployee(1001)).to.be.not.undefined;
    });
    it('testing deleteEmployee method',async()=>{
        await expect(service.deleteEmployee(1001)).to.be.rejectedWith('Could not delete the data/Employee not found');
    });
    it('testing readEmployee method',async()=>{
        expect(service.readEmployee(1002)).to.be.not.undefined;
    });
});