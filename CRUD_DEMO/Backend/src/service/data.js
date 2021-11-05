const model = require("../model/data");//importing model module

let service = {};
/* 
   service.insertScript() :
   Invoing the model.insertScript(),
   if operation success , return array of inserted documents
   else throw the error
*/
service.insertScript = async()=>{
    let data = await model.insertScript();
    if(data){
        return data;
    }else{
        let error = new Error("Script Insertion Failed");
        error.status = 500;
        throw error;
    }
};
/*
  service.addEmployee() :
  Invoke model.addEmployee(),
  if operation success then return inserted document
  else throw error
*/

service.addEmployee = async(employeeObj)=>{
    let data = await model.addEmployee(employeeObj);
    if(data){
        return data;
    }else{
        let error = new Error("Insertion Operation Failed")
        error.status=500;
        throw error;
    }
};

/*
  service.getAllEmployees() :
  Invokes model.getAllEmployees(),
  if operation success then returns all employee documents,
  else throw error
*/
service.getAllEmployees = async()=>{
    let data = await model.getAllEmployees();
    if(data){
        return data;
    }else{
        let error = new Error("No Employee Documents found");
        error.status=404;
        throw error;
    }
}
/*
  service.deleteEmployee() :
  Invokes model.deleteEmployee(),
  if operation success then returns data,
  else throw error
*/
service.deleteEmployee = async(eid)=>{

    let data = await model.deleteEmployee(eid);
    if(data){
        return data;
    }else{
        let error = new Error("Could not delete the data/Employee not found");
        error.status=404;
        throw error;
    }

}

/*
  service.updateEmployee() :
  Invokes model.updateEmployee(),
  if operation success then returns data,
  else throw error
*/

service.updateEmployee = async(empObj)=>{
    let data = await model.updateEmployee(empObj);

    if(data){
        return data;
    }else{
        let error = new Error("Could not update the data/Employee not found");
        error.status=404;
        throw error;
    }
}

/*
  service.readEmployee() :
  Invokes model.readEmployee(),
  if operation success then returns data,
  else throw error
 */
service.readEmployee = async(id)=>{
    let data = await model.readEmployee(id);
    if(data){
        return data;
    }else{
        let error = new Error("Employee Document not found");
        error.status=404;
        throw error;
    }
}
module.exports = service;