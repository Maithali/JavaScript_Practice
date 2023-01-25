//Array
/* array methoda push pop splice */
//set map spread 
let nums = [];
console.log(typeof nums);//objects
console.log(nums);//[]

let num = [7,8,6];
console.log(num);//[7,8,6]
console.log(num[1]);//8

//add value in array
num[3]=11;
console.log(num);//[7,8,6,11]

//array collection of data
let value = [1,"maithaly",{company:"Apple"},function() {console.log("HI");}]
console.log(value);//[1, 'maithaly', { company: 'Apple', function: [Function: function] } ]
//calling function from array
value[3]();//HI

//push
let numbers = [9,5,3,4,7];
console.log(numbers.push(1));//6
console.log(numbers);//[9,5,3,4,7,1]
console.log(numbers.push(33));//8 push gives us the length of array
console.log(numbers.pop());//33 removes last value from array
console.log(numbers.shift());//9  is removed becauseof shift
console.log(numbers); //[5,3,4,7,1]
console.log(numbers.unshift(8));//adds 8 to the start of array + 6array length
console.log(numbers);//[8,5,3,4,7,1]

let values = [];
values[0]=9;
values[99]=4;
console.log(values);//[ 9, <98 empty items>, 4 ]


//for in
for(let i in values)
console.log(values[i]);//9 4 returns only index values which has values


//for of
for(let n of values)
console.log(n);//returns all the values


let numb = [9,5,3,4,7];
delete numb[0];
console.log(numb);//[ <1 empty item>, 5, 3, 4, 7 ]

let no= [9,5,3,4,7];
no.splice(0,2,8);//cuts 
console.log(no);//[ 8, 3, 4, 7 ]