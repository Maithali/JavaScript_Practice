//Using loops,pattern
/*
1
23
456
78910
*/

let n=4; //height of pattern
let string = "";
let count = 1;
//external loop
for(let i=1; i<=n;i++){
    //internal loop
    for(let j=1;j<=i;j++){
        string +=count;
        count ++;
    }
    string +="\n";
}
console.log(string);