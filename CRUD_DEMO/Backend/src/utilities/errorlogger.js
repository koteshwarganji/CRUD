const fs = require('fs');

let errorLogger = (err,req,res,next)=>{
    if(err){
        let logMessage = new Date().toDateString()+" - "+err.stack + "\n";
        fs.appendFile('errorLogger.txt',logMessage,(error)=>{
            if(error){
                console.log("logging error failed");
            }
        });

        if(err.status){
            res.status(err.status);
        }else{
            res.status(500);
        }
        res.json({"message":err.message})
    }
    next();
}

module.exports = errorLogger;