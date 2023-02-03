const fs= require("fs");
fs.readFile('demo.txt','utf-8',(err,data)=>{
    if (err) {
        throw err.name;
    }
    console.log(data);
})
process.on("uncaughtException",err=>{
    console.error(`there is some uncaught error that need to be checked ${err}`);
    process.exit();
})
console.log("this partwillbe printed last");