// Check a year is a leap year or not

function checkLeapYear(year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}

const Check=checkLeapYear(2019);
console.log(Check);