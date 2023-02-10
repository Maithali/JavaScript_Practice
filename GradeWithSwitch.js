// GradeWithSwitch
let grade=55;
let showGrade;
//switchcase
switch (true) {
    //if marks are 90-100
    case grade >=90 && grade<=100 :
        console.log("S grade");
        break;
    //if marks are between 80-90
    case grade >=80 && grade<=89:
        console.log("A grade");
        break;
    //if marks is between 70-80;
    case grade >=70 && grade<=79:
        console.log("B grade");
        break;
     //if marks is between 60-70;
     case grade >=60 && grade<=69:
        console.log("C grade");
        break;
     //if marks is between 50-60;
     case grade >=50 && grade<=59:
        console.log("D grade");
        break;
    //if marks is between 40-50
    case grade >=40 && grade<=49:
        console.log("E grade");
        break;
     //if marks is between 0-40;
     case grade >=0 && grade<=39:
        console.log("Fail");
        break;
      

    default:
        console.log("Invalid");
}