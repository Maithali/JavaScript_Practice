//file system
//install node js - fs module will be installed

//how to read a text file
const fs= require("fs");

fs.readFile("demo.txt",'utf-8',(err,data)=>{
    if(err){
        throw err.name;
    }else{
        console.log(data.toString());
    }
})