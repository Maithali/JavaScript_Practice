//exception 
/*
let a='hello';
if(a!=undefined){
    throw new Error("this is not undefined text");

}else{
    console.log("this is undefined ");
}

*/
//try and catch block

/*
 try{
    
}catch(error){

}
*/

try{
let a= 5;
console.log("we are in try block");
blockchain();
}catch(error){
    console.log("Something went wrong");
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("this will always executed no matter what");
}