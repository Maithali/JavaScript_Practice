// TriangleIsEqulitateral

//variables
let side1=3, side2=4,side3=3;

//function calling
checkTriangle(side1,side2,side3);
function checkTriangle(side1,side2,side3) {
    
    //checking for equilateral triangle
    if (side1==side2 && side2==side3) {
        console.log("Equilateral Traingle");
    }
    //checking for isosceles triangle 
    else if(side1==side2 || side2==side3 || side3==side1){
        console.log("Isosceles Traingle");
    }
    else
    console.log("Scalene Traingle");
}