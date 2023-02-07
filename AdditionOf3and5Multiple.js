// AdditionOf3and5Multiple

//variable sum with inital 0 value
let sum=0;
//loop with inital x=0 but less than 1000 
for(let x=0;x<1000;x++){
    // if true check if for multiple of 3 and 5

    if (x%3===0 || x%5===0) {
        //add value of x
        sum+=x;
    }
}
console.log(sum);