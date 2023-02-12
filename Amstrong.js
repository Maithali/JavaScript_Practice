// Amstrong


let number = 153;
let temp = number;
let sum = 0;

function isAmstrong() {
    while (number > 0) {
      let  rem = number % 10;
        sum= (sum) + (rem * rem * rem);
        number = Math.floor(number/10);
    }
    if (sum == temp) {
        console.log("Amstrong  Number");
    }
    else{
        console.log("Not Amstrong Number");
    }
    
}
isAmstrong();