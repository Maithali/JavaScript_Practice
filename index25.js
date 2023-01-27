//promises
//create a promise
//executor function
let promise = new Promise(function(resolve,reject){
   setTimeout(function (){
    resolve("hurray ! jack and jill are back with water");
   },2000) 

   setTimeout(function(){
    reject(
        new Error("Jack fell down "));
   },2000);
});

//consumer function
const grandParentCooking = () =>{
    promise.then(function(result){
        console.log(`cooking the veg with ${result}`);
    });

    promise.catch(function (error){
        console.log(`omg ${error.msg}`);
    });
};
grandParentCooking();