//today
/* 
loops 
switch
functions
objects
*/
//while loop
let y=1;
while(y <= 5){
    console.log("maithaly");
    y++;
}

//do while loop
let x=1;
do{
    console.log("matrix");
    x++;
}while(x <= 5)

//for loop
for(let z=1; z<=5; z++){
    console.log(z);
}

//switch statement

//sat,sun-6am;
//mon-fri-8am;
//wed-7am;
let day="sun";
switch(day){
    case "sat":
    case "sun":
        console.log("6am");
        break;
    case "mon":
    case "tue":
    case "thur":
    case "fri":
        console.log("8am");
        break;
    case "wed":
        console.log("7am");
        break;
    default:
        console.log("keep Dreaming");
    
        }


//countinue
for(let i=1; i<=5;i++){
    if(i===2)
    continue;
    console.log("hello " + i);
}

//break
for(let i=1; i<=5;i++){
    if(i===2)
    break;
    console.log("bye " + i);
}

//nested loops
for(let i=1;i<=3;i++)
{
    for(let j=1; j<=5;j++)
    {
        console.log("j "+j);
    }
    console.log("end "+ i);
}