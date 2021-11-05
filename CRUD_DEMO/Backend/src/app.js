const express = require('express');//importing express module
const bodyParser = require('body-parser');//importing body-parser
const morgan = require('morgan');//imporitng morgan module
const routing = require('./routes/routing');//importing routing module
const requestLogger = require('./utilities/requestlogger');//importing requestLogger module
const errorLogger = require('./utilities/errorlogger');//importing errorLogger module
const helmet = require('helmet');//importing helmet module
const cors = require('cors');//importing cors module
const app = express();//createing application object by calling express function
app.use(helmet());//helmet privides security by setting security related HTTP headers
app.use(morgan('tiny'));//logs the incoming server requests
app.use(cors());//cors adds HTTP headers which instruct browsers to allow cross-origin resource sharing
app.use(bodyParser.urlencoded({extended: true}));//the value can be a string or an array when extended is false, or any type, when extended, is true
app.use(bodyParser.json());//parses the incoming json data of post request as JSON and make the object on req.body accessible
app.use(requestLogger);//logs the incoming request
app.use(routing);//invokes the routing module
app.use(errorLogger);//logs the errors


app.listen(3000);//server listens incoming requests at port 3000
console.log("Server Started at port 3000");

module.exports=app;
