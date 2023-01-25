//methods of arrays maps,filter,reduce,foreach

let value =[5,6,2,3,1];
//internal loops
value.forEach( function(num){
    console.log(num);//5 6,2,3,1  one below the other
})

let values =[9,5,3,4,7];
values.forEach(num =>{if(num%2===0) console.log(num)});//4

let num =[9,6,3,4,7];
num.filter(n =>  n%2===0)
.forEach(n => console.log(n));//6 4

//change the values
let val =[9,6,3,4,7];
val.filter(n => n%2==0)
.map(n => n*2)
.forEach(n => console.log(n));//12 8

//reduce

let v=[9,6,3,4,7];
let result = v.filter(num => num%2===0)
.map(num => num*2)
.reduce((sum,num) => sum + num , 0);
console.log(result);//20