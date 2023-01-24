/* oops concepts
abstraction
inheritance
pass by value and reference
*/


//class
class Person{
    constructor(name,age,qual,desig,city,nationality,salary,gender){
        this.name=name;
        this.age=age;
        this.qual=qual;
        this.desig=desig;
        this.city=city;
        this.nationality=nationality;
        this.salary=salary;
        this.gender=gender;
    }
    greet(){
        console.log(`Hello ${this.name}`);
        console.log(Person1);
    }
}
let Person1 = new Person("maithaly",25,"pg","BlockchainDeveloper","Nagpur","Indian","50000000","Female");
Person1.greet();


