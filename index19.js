//set and maps
//functional programming
//strings


//set
let a = new Set();//set declaration
let set =new Set();
set.add(5);
console.log(set);//Set(1) { 5 }
set.add("Maithaly");
set.add("maithaly");
console.log(set);//Set(2) { 5, 'maithaly' }
console.log(set.size);//2

set.delete("maithaly");
console.log(set);

//Map
let map =new Map();
map.set("Navin","Java");
map.set("Hyder","JS");
map.set("sanjeevan","blockchain");
map.set("maithaly","Edge Coumputing");
map.set("maithaly","Blockchain");
console.log(map);/*Map(4) {
  'Navin' => 'Java',
  'Hyder' => 'JS',
  'sanjeevan' => 'blockchain',
  'maithaly' => 'Blockchain'
}
*/
console.log(map.keys());/*[Map Iterator] { 'Navin', 'Hyder', 'sanjeevan', 'maithaly' }*/
console.log(map.values());/*[Map Iterator] { 'Java', 'JS', 'blockchain', 'Blockchain' }*/
 map.forEach((v,k)=>console.log(v));/* Java
JS
blockchain
Blockchain
*/

let values = [3,4,5,6,8];
values.forEach((v,i,values)=>console.log(v,i));/*
3 0
4 1
5 2
6 3
8 4
*/

//functional programming
setTimeout(function print(){
    console.log("get lost");
},10000)//get lost after 10 sec.

function x(){
    function y(){
        console.log("in y");
    }
    console.log("in x");
    y();
}
x();


function outer(){
    console.log("outer");
    return function(){
        console.log("inner");/* outer
inner */
    };
}
let result = outer();
result();

