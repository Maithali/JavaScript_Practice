// SpecialNumberOrNot
let num = 145,fact = 1, sum = 0,z = num;

while (num > 0) {
    let temp = num % 10;
    num= parseInt (num/10);
    fact = 1;

    for(i=1;i<=temp;i++){
        fact = i * fact;
        console.log(i,fact);
    }
    sum = sum+fact;
}
console.log(sum);

if(z==sum){
    console.log("Special Number");
}else{
    console.log("not a special Number");
}