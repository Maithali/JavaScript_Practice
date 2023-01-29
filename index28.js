//iterator ,generator DOM
var x =["blockchain","javascript","React","Nodejs","solidity"];
for(let i=0;i<x.length;i++){
    console.log(x[i]);/* blockchain
javascript
React
Nodejs
solidity
*/
//iterator
let a = x[Symbol.iterator]();

console.log(typeof a[Symbol.iterator]());
let firstVAl = a.next();
console.log(firstVAl);

let secondValue =a.next();
console.log(secondValue);

let thiredVal =a.next();
console.log(thiredVal);

let forthVal = a.next();
console.log(forthVal);

let fifthVal =a.next();
console.log(fifthVal);

let sixthVal = a.next();
console.log(sixthVal);
} 

let n="MAithaly";
let t= n[Symbol.iterator]();
let first= t.next();
console.log(first);
