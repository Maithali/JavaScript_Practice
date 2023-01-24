//objects
let student = new Object();
student.name = "maithaly";
student.age = 25;
student.roll_no = 90;
student.yop = 2020;
student.subjects = ["blockchain,Javascript,React"];
console.log(student);
student.marks = [20, 63, 58];
console.log(student);

//function
function Student(name, age, yop, qual, dob) {
    this.name = name;
    this.age = age;
    this.yop = yop;
    this.qual = qual;
    this.dob = dob
}

// let student1 = new Student();
// console.log(student1);

let student1 = new Student("Matrix",25,"1997","PG",2020);
console.log(student1);
