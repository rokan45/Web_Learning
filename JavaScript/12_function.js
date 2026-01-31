//basic syntax of function to display some message

function display() {
    console.log("Tamim and Sakib is dalal of another country");
    console.log("They only play for money and fame.");
}

//Call the function
display();

//function with parameter
function sqauare(x, y) {
    return x * y;
}
//function calling
console.log(sqauare(4, 5));

//function parameter with different variable
function AgeGap(x,y){
    let diff=(x-y);
    console.log("Our age Gap is: ",diff);
}

let myAge= 30;
let myWifeAge=25;

AgeGap(myAge,myWifeAge);