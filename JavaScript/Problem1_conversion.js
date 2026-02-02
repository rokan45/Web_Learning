function inchTofeet(inch){
     let feet=inch/12;
     const feetFraction=parseInt(feet);
     let inchFraction=inch%12;

    let result= feetFraction+'Ft '+inchFraction+'inch ';
     return result;
}

let myHeight=inchTofeet(63);
console.log(myHeight);
