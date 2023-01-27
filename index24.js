//asynchrounus


//synchronus
console.log("one");
console.log("two");
console.log("three");

//asynchronus
console.log("ONE");
setTimeout(()=> console.log("two"),0);
console.log("THREE");

//function example synchronus
const fun1 = () => {
    console.log("function 1 is starting");
    func2();
    console.log("funcion 1 is ending");
}
const func2 = () => {
    setTimeout( () => {
        console.log("functon 2 is starting");
    },0);
}
fun1();