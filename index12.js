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
    }

}
class Employee extends PersonDo{
    constructor(name,occupation){
        super(name,occupation);

        this.occupation="Blockchain developer"
    }
    greet(){
        console.log(`Hello Student : ${this.name}`);
        console.log(`occupation isnow : ${this.occupation}`);
    }
}

let obj1 = new PersonDo("Maitheeeee");
obj1.greet();
let obj2 = new Employee("Maithaly");
obj2.greet();