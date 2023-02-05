//leap year program

function leapYear(year) {
    if ((year%4==0)&&(year%100!=0)|| (year%400==0)) {
        return true;
    }
    else
    return false;
}

const myYear=2020;
const isMyYearLeapYear =leapYear(myYear);
console.log(isMyYearLeapYear);