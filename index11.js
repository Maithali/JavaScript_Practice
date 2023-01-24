/* oops concepts
abstraction
inheritance
pass by value and reference
*/


//class
//inheritance
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
       
        console.log(student1);
    }
}
class Student extends Person{

    constructor(name,age,qual){
        super (name);
        this.name=name;
        this.age=age;
        this.qual=qual;
    }

    greet_student(){
        console.log(stud1);
    }
}

let student1 = new Student("sanjeevan",23,"btech","blockchain developer","banglore","Indian",100000,"M")
student1.greet();
let stud1 = new Student("maith",25,"PG");
stud1.greet_student();




//practice
class Car{
    constructor(name,brand,com,total_sales){
        this.name=name;
        this.brand=brand;
        this.com=com;
        this.total_sales=total_sales;
    }
    product(){
        console.log(car1);
    }
    
}
class Gadi extends Car{
    constructor(engine,transmission,suspension,seating,capacity,price,yol){
        super(engine);
        this.engine=engine;
        this.transmission=transmission;
        this.suspension=suspension;
        this.seating=seating;
        this.capacity=capacity;
        this.price=price;
        this.yol=yol;
    }
    gadi(){
        console.log(gadi);
    }
}

let car1 = new Car("RollsRoyce","Rolls_Royce",1,100);
car1.product();
let gadi = new Gadi("phantom",500,600,5,6,10000000,2023);
gadi.gadi();