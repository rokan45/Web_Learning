// Check a year is a leap year or not
//Simple logic
function checkLeapYear(year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}

const Check=checkLeapYear(2019);
console.log(Check); //return false

//Accurate Logic

//We know: Those year is not divided by 100 and divisible by 4 is leapyear
function checkLeapYear(year){
    if( year%100 !==0 && year%4 ===0){
        return true;
    }
    else if(year%100===0 && year%400 ===0){
        return true;
    } 
    else
    {
        return false;
    }
       
}

const Check2=checkLeapYear(2100);
console.log(Check2); //return false
