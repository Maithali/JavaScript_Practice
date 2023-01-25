//array destructuring

let values =[9,5,3,4,7];
let [a,b,c,d,e] = values; 
console.log(e);//7
console.log(a,b,c);//9 5 3

[a,b,c,...d]=values;
console.log(d);//[4,7]

let string1 = "Aman Hitanshu Ninad Sanjeevan Hyder Navin";
let [x,y,...z]= string1.split(' ');
console.log(x,y,z);//Aman Hitanshu [ 'Ninad', 'Sanjeevan', 'Hyder', 'Navin' ]

//rest and spread
//rest
function sum(a,b ,...nums){
    let result = a+b;
    for(let num of nums){
        result = result+num;
    }
    return result;
}
let result = sum(4,5,8,9,3);
console.log(result);//29


//spread
function sum1(a,b,c,d,e){
    let res = a+b+c+d+e;
    return result;
}
let nn =[4,5,8,3];
let res = sum1(...nn);//spread operator
console.log(res);//29

