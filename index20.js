//closure
function outer(){
    let num1 = 20;
    console.log("outer" , num1);
    return function(num3){
        let num2 =10;
        console.log("inner",num2,num1,num3);
    }
}
let result = outer();
result(45);

//string
var str="i live in Ngp";
var a= str.length;
a=str.toUpperCase();//I LIVE IN NGP
a=str.toLowerCase();//i live in ngp
var a=str.includes("in");//true  inclue is case sensitive
a=str.endsWith("ngp");//false because case sensitive
a=str.startsWith("i");// true
a=str.search("li");//2 givens staring index
a=str.match("i");//[ 'i', index: 0, input: 'i live in Ngp', groups: undefined ]
a=str.charCodeAt("N");//105
a=str.slice(2,5);//liv 
console.log(a);//13


