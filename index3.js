let value = parseInt("987 Maithaly");
console.log(value, typeof value);

let num = 1;
//num = num+ 2;
//short hand 
num+=2
//increment by 1
// num+=1;
//short hand
num++;
console.log(num);


let n=8;
n++;
console.log(n);

//post increment num++
//pre increment ++num

let num8 =18;
num8 ++;
console.log(num8);

//Relational operator
let n1= 8;
let n2= 6;
let greaterthan= n1 > n2; //boolean
let lessthan= n1 < n2;//boolean
let compare= n1 === n2;
console.log(greaterthan);
console.log(lessthan);
console.log(compare);

//string comparition

let str1 ="pen";
let str2  ="gun";
let result= str1 >str2;//true
console.log(result);

let value1 = "js";
let value2 ="js";
let result1 = value1 != value2;//false
console.log(result1);//false

let store1 = 8;
let store2 = 7;

let user1 = "Maithali";
let user2 = "Matrix";

let output1 = store1 + store2;
console.log(output1);//15

let output2= user1 + user2 ;
console.log(output2);//MaithaliMatrix

//space in between
output2  = user1 + " " + user2;
console.log(output2);//Maithali Matrix

//template literal ${}
console.log(`the addition of ${store1} and ${store2} is ${output1}`);








