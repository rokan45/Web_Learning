//Calculate ticket price according to age discount
let customarAge=18;
let ticketPrice=800;

if(customarAge<10){
    
    console.log("For child ticket price is free");
}
else if(customarAge<=20){
    afterDiscount=ticketPrice-(ticketPrice*.50);
    console.log("For student ticket price:",afterDiscount);
}
else if(customarAge>=60){
    afterDiscount=ticketPrice-(ticketPrice*.15);
    console.log("For senior citizen ticket price:",afterDiscount);
}
else{
    console.log("Regular Price:",ticketPrice);
}