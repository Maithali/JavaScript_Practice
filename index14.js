//encapsulation
class Alien{
    constructor(){
        let age,name;
    }
    setAge(age){
        this.age=age;
    }
    setName(name){
        this.name=name;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}
let a=new Alien();
a.setAge(28);
a.setName("Maithaly");

console.log(a.getAge());
console.log(a.getName());


/*  difference var,let,const */
var aa="Telusko";//declare
var aa = "Alien";//redeclare and reassign
console.log(aa);//ALien


let aaa="Maithaly";
//let aaa="iNeuron";//error redeclared
aaa="Ineuron"//reassign is allowed
console.log(aaa);//Ineuron

const aaaa="telusko";
//aaaa ="maithaly";//error reassign is not allowed
console.log(aaaa);


/*  statically and dynamically 

static type means you have to define its datatype 
let int a= 29;

dynamic types means you dont have to declare its datatype
let a= 29;
*/

/* scope */
//global scope
if(true){
    var a1="maith";
    console.log(a1);//maith
}
console.log(`outside ${a1}`);//outside maith



if(true){
    let a2="maith";
    console.log(a2);//maith
}
//console.log(`outside ${a2}`);//error scope is till inside the method

if(true){
    const a3="maith";
    console.log(a3);//maith
}
//console.log(`outside ${a3}`);//error
