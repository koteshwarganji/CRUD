const connection = require("../utilities/connection");//importing connection module
const initialData = require("./data.json");//importing sample data json

let model = {}
let collection={}
/*
  createCollection() :
  calling the getCollection() method,
  returns a collection object
*/
let createCollection = async()=>{
    collection = await connection.getCollection();
};

/* 
   model.insertScript() :
   deletes all documents if any,
   inserts all documents using create function which takes initialData contains json data,
   if response is array of inserted documents,then return response.
   else returns null
*/
model.insertScript = async()=>{
    await collection.deleteMany();
    let response = await collection.create(initialData);
    if(response && response.length){
        return response;
    }else{
        return null;
    }
};

/* 
  model.addEmployee() :
  insert a student document,
  if insertion successfull , then returns inserted document,
  else returns null
*/
model.addEmployee = async(employeeObj)=>{
    let response = await collection.create(employeeObj);
    if(response){
        return response;
    }else{
        return null;
    }
}

/*
  model.getAllEmployees() :
  read all employees,
  if operation successfull then returns the all employee documents,
  else returns null
*/

model.getAllEmployees = async()=>{
    let response = await collection.find();
    if(response && response.length>0){
        return response;
    }else{
        return null;
    }
}

/*
  model.deleteEmployee() :
  delete the employeed by given id,
  if success then return the data
  else return null
*/

model.deleteEmployee=async(eid)=>{
    let response = await collection.deleteOne({EmployeeId : eid});
    if(response.deletedCount>0){
        return response;
    }else{
        return null;
    }
}

/*
   model.updateEmployee() :
   update the employeed by given id,
   if success then return the data
   else return null
   runValidators to check the validations
*/

model.updateEmployee = async(empObj)=>{
    let eid = empObj.EmployeeId;
    let fName = empObj.FullName;
    let dob = empObj.DateOfBirth;
    let sal = empObj.Salary;
    let desg  = empObj.Designation;
    let mob = empObj.MobileNo;
    let emailid = empObj.Email;
    let addr = empObj.Address;

    let response = await collection.updateOne({EmployeeId : eid},
        {
            $set : {
                FullName : fName,
                DateOfBirth : dob,
                Salary : sal,
                Designation : desg,
                MobileNo : mob,
                Email : emailid,
                Address : addr
            }
        },{runValidators : true});
    console.log(response);
    if(response.modifiedCount>0){
        return response;
    }else{
        return null;
    }
}

/*
   model.readEmployee() :
   read the employeed by given id,
   if success then return the data
   else return null
*/
model.readEmployee = async(id)=>{
    let response = await collection.findOne({EmployeeId : id},{_id : 0,"Address._id":0});
    if(response){
        return response;
    }else{
        return null;
    }
}
createCollection();
module.exports = model;

