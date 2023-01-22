//functions
function doSomething(){ //defining
let name="maithaly";
console.log(name);
}

doSomething();//calling a function


//add function
let num1=0;
let num2=9;
let num3=8;
function add(n1,n2,n3){
    console.log(n1 + n2 + n3);
}
add(num1, num2, num3);


//return
let v1=9, v2=5;
function addi(n1,n2){
    return n1 + n2;
}
let addition = addi(v1,v2);
console.log(addition);


//objects
//3 ways of creating objects
let empty = {};
console.log(empty);//{}

let point = {x:0, y:0};
let p2 = {x: point.x , y: point.y+1};
console.log(p2);

let book = {
    "title":"js",
    "author":{
        "firstname":"maithaly",
        "lastname":"gharde"
        
    },
    
    "year":2023,
    "num_copies":1000
}
console.log(book.title);
console.log(book.year);
console.log(book.author);
console.log(book.num_copies);


//2nd way object
let book2 = new Object();
book2.title = "Harry Potter";
book2.author = "JK Rowling";
book2.pages = 400;
book2.publisher = "Bloomsbury";
book2.year = 1997;
console.log(book2);
console.log(book2.pages);
//modifying
book2.pages = 600;
book2["author"]="maithaly";
console.log(book2);


//3rd way
let obj1 = Object.create({x:1 , y:2});
let o2 = obj1.x + obj1.y;
let o3 = obj1.x * obj1.y;
console.log(o2);
console.log(o3);

//car example
const myCar = new Object();
myCar.company = "RollsRoyces";
myCar.model = "Rolls-Royce Phantom";
myCar.engine = "6.7 L V12";
myCar.seating_capacity = 5;
myCar.body_style = "Sedan";
myCar.price = "10.48 Cr.";
myCar.transmission = "automatic";
myCar.year = 2023;
console.log(myCar);
