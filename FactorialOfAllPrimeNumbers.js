// FactorialOfAllPrimeNumbers

//method
function checkPrime(noToCheck) {
    if (noToCheck==1) {
        return false;
    }
    for(let i=2; i*i<=noToCheck;i++){
        if (noToCheck % i==0) {
            return false;
        }
    }
    return true;
}
function primeAdd(a,b) {

    for(let i=b; i>=a;i--){
        //check for prime
        let isPrime = checkPrime(i);
        if (isPrime) {
            console.log(i);
            sum=sum+i;
        }
    }
    return sum;
}
let sum=0;
let a=2,b=10;
console.log("Prime Number from "+a+" to "+b);
console.log("sum of Total prime Numbers "+primeAdd(a,b));

function fact(sum) {
    if (sum==0 || sum==1) {
        return 1;
    } else {
        return sum* fact(sum-1);
    }
    
}
let answer= fact(sum);
console.log("the Factorial of  " + sum+ " is "+answer);