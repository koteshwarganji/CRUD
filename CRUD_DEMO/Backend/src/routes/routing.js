const express = require('express');//importing express module
const routing = express.Router();//creating router object
const service = require("../service/data");//importing service module

/*
   routing.get() : invoked on /setupDB path
   if data is inserted successfully
   returns status code 201 with json response.
   else throw error.
*/
routing.get('/setupDB',async(req,res,next)=>{

    try{
        let data = await service.insertScript();
        if(data){
            res.status(201);
            res.json({message : `Script Insertion Successfull, ${data.length} documents inserted`})
        }
    }catch(error){
        next(error);
    }
});

/*
   routing.post() : invoked on /addEmployee path
   if employee inserted successfully then 
   returns status code 201 with json response.
   else throw error.
*/
routing.post('/addEmployee',async(req,res,next)=>{

    try{
        let employeeObj = req.body;
        let data = await service.addEmployee(employeeObj);
        if(data){
            res.status(201);
            res.json({message : `Employee  inserted successfully : ${data.EmployeeId}`});
        }
    }catch(error){
        next(error);
    }
});

/*
   routing.get() : invoked on /getAllEmployees path
   if employee documents found successfully then 
   returns status code 201 with json response.
   else throw error.
*/
routing.get('/getAllEmployees',async(req,res,next)=>{

    try{
        let data = await service.getAllEmployees();
        if(data){
            res.status(201);
            res.json({message : data})
        }
    }catch(error){
        next(error);
    }
});

/*
   routing.delete() : invoked on /deleteEmployee/:id path
   if employee document deleted successfully then 
   returns status code 201 with json response.
   else throw error.
*/

routing.delete('/deleteEmployee/:id',async(req,res,next)=>{

    try{
        console.log('hello')
        let eid = req.params.id;
        let data = await service.deleteEmployee(eid);
        if(data){
            res.status(201);
            res.json({message : `EmployeeId ${eid} Employee deleted`});
        }
    }catch(error){
        next(error);
    }
});

/*
   routing.put() : invoked on /updateEmployee path
   if employee document updated successfully then 
   returns status code 201 with json response.
   else throw error.
*/

routing.put('/updateEmployee',async(req,res,next)=>{

    try{
        let empObj = req.body;
        let data = await service.updateEmployee(empObj);
        if(data){
            res.status(201);
            res.json({message : `${empObj.EmployeeId} Employee updated`});
        }
    }catch(error){
        next(error);
    }
});

/*
   routing.get() : invoked on /getEmployee/:id path
   if employee document found successfully then 
   returns status code 201 with json response.
   else throw error.
*/

routing.get('/getEmployee/:id',async(req,res,next)=>{

    try{
        let id = req.params.id;
        let empData = await service.readEmployee(id);
        if(empData){
            res.status(201);
            res.json({message : empData});
        }
    }catch(error){
        next(error);
    }
})
module.exports = routing;