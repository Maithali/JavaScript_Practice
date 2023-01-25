//oops
/* static methods
encapsulation
 */
class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(this.name);
    }
}

class Student extends Person{
    constructor(name) {
        console.log("this is a child class");
        super(name);
        
    }
}
let student1 = new Student("maithali");
student1.greet();



class PersonDo{
    constructor(name,occupation){
        this.name=name;
        this.occupation=occupation;

        this.occupation="java Developer"
    }
    greet(){
        console.log(this.name);
        console.log(`occupation then :${this.occupation}`);
    }

}
class Employee extends PersonDo{
    constructor(name,occupation){
        super(name,occupation);

        this.occupation="Blockchain developer"
    }
    greet(){
        console.log(`Hello Employee : ${this.name}`);
        console.log(`occupation is now : ${this.occupation}`);
    }
}

let obj1 = new PersonDo("Maitheeeee");
obj1.greet();
let obj2 = new Employee("Maithaly");
obj2.greet();


//functional Inheritance

function Animal(value){
    var obj = {};//create an empty object
    obj.name = value.name1;//assign a new attribuute to object
    return obj;//return the value of object
};

function dog(value){
    var obj=Animal(value);
    obj.greet=function(){
        return `Hello , ${obj.name1}`;
    };
    return obj;
};

var myCuteDog = dog({name1 :"Snoop"});
console.log(myCuteDog.greet());