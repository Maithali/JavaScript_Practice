/*static method */

class Person{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
    static Create(gender){
        let name = gender =="Male" ? "Sanjeevan " : "Maithlay"
        return new Person(name)
    }
}
let name_gender = Person.Create("Male");
console.log(name_gender);