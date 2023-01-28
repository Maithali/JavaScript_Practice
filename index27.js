//symbol

var a=Symbol("alien");
var b=Symbol("alien");
console.log(a==b);//fasle because symbol are unique thats why both are different


let age = Symbol("age")
let user = {
    name1:"Maithaly",
    quali:"MCA",
    [age]:25

};
console.log(user);
