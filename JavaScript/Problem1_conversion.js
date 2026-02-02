// Coverting feet to inch with fraction
function inchTofeet(inch){
     let feet=inch/12;
     const feetFraction=parseInt(feet);
     let inchFraction=inch%12;

    let result= feetFraction+'Ft '+inchFraction+'inch ';
     return result;
}

let myHeight=inchTofeet(63);
console.log(myHeight);


//Converting to km to mile

function kmTomile(km){
     let mile=km*0.621371;
     let result=mile.toFixed(3)+' mile';

     return result;
}

let Km=kmTomile(100);
console.log(Km);
