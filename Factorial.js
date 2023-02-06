// Factorial

var number = 5;
if (number < 0) {
    console.log("INVALID");
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
} else {
    let fact =1;
    for (let i = 1; i <= number; i++){
    fact*=i;
1       
    }
    console.log(fact);
    
}