//Swap using temp
let a = 10;
let b = 20;
console.log(a, b);

const temp = a;
//swaping
a=b;
b=temp;

console.log("After swaping a now:",a+ " and The b now: ", b);

//swap using destructing
let x=10;
let y=20;
console.log(x,y);

[x,y]=[y,x]
console.log(x,y);

