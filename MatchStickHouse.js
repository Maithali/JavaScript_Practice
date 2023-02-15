// MatchStickHouse

const  matchStickHouses = (n)=>{
    if (n==0) {
        return "Step 0 returns 0 matchsticks."
    }else if(n < 0 ||typeof n!=="number"){
        return"Enter Only Positive Number.";
    }else{
        let a =(5 * n) + 1;
        return a;
    }
}
console.log(matchStickHouses(1));
console.log(matchStickHouses(4));
console.log(matchStickHouses(87));
console.log(matchStickHouses(0));
console.log(matchStickHouses("house"));