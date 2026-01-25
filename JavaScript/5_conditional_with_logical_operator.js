var salary=2000;
var rent=500;
var transport=3000;

var Payable= rent<salary;
var Debt=rent>salary;

if(Payable|| Debt){
    console.log("You can pay with your money")
}
else if (rent<2000  && Payable) {
    console.log("You are capable of paying debt")
} else {
    console.log("You have work hard to more income")
}