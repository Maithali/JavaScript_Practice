//genereator
function  *display(){
    console.log("hey");
    yield "first pause";
    console.log("How");
    yield "second pause"
    console.log("are");
    yield "third pause"
    console.log("you");
}
let control=display();
control.next();//hey
control.next();//hey how