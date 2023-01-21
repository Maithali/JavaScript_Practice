//condition

let number = 5;

if (number%2 === 0) {
    console.log("even");
}  
else
{
console.log("odd");
}

//grater number
let v1= 19;
let v2= 10;
if(v1 > v2 ){
    console.log(v1);
}
else{
    console.log(v2);
}

//logical ooperators
let n1= 9, n2= 516, n3=32;

if(n1 > n2 && n1 > n3)
console.log(n1);
else if(n2 > n1 && n2 > n3)
console.log(n2);
else
console.log(n3);

//ternary operator

let num =189;
let result ="";
result = num%2 === 0 ? "Even" :"Odd";
console.log(result);

//loops
let i= 1;
while(i <= 5){
    console.log("maithaly");
    i++;
};

//print all even numbers
for(let i=1; i<=100;i++){
    if(i%2===0){
       console.log(i); 
    }
}

