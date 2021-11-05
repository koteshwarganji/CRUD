const mongoose = require('mongoose'); //importing mongoose library
const Schema = mongoose.Schema; //declaring variable of type Schema
mongoose.Promise = global.Promise;//mongoose works with asynchronous operations handled using callbacks and promises
const url = 'mongodb://localhost:27017/EmployeeDB';//MongoDB protocol followed by host and the database name as a parameter

/*
schema defines the structure of the database
schema used to mention the fields,types of fields,validations etc
*/
let schema = {
    "EmployeeId" : {
        type : Number,
        unique : true,
        required : [true,'Required field']
    },
    "FullName" : {
        type : String,
        required : [true,'Required field']
    },
    "Salary" : {
        type : Number,
        required : [true,'Required field']
    },
    "Designation" : {
        type : String,
        required : [true,'Required field']
    },
    "MobileNo":{
        type : Number,
        unique : true,
        required : [true,'Required field']
    },
    "Email":{
        type : String,
        unique : true,
        required : [true,'Required field']
    },
    "Address":{
        type : {
            "City" : {
                type : String,
                required : [true,'Required field']
            },
            "State" : {
                type : String,
                required : [true,'Required field']
            }
        },
        required : [true,'Required field']
    },

};

let employeeSchema = new Schema(schema, { collection : 'Employee',timestamps: true });
/*
Schema class provided by mongoose library
first parameter as schema
second parameter as collection name
timestamps to recor create and update of each document
*/

let connection = {};


/* 
  model takes schema and name of the collection as input
  returns object used to access documents in a given collection
 */
connection.getCollection = async()=>{

    try{
        return (await mongoose.connect(url,{useNewUrlParser : true,useUnifiedTopology : true})).model('Employee',employeeSchema);
    }catch(err){
        let error = new Error("Could not connect to Database");
        error.status = 500;
        throw error;
    }
}

module.exports = connection;