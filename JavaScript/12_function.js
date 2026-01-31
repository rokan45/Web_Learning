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

console.log(sqauare(4, 5)); //function calling


//function parameter with different variable
function AgeGap(x,y){
    let diff=(x-y);
    console.log("Our age Gap is: ",diff);
}

let myAge= 30;
let myWifeAge=25;

AgeGap(myAge,myWifeAge); ////function calling



//function with string parameter
function strLength(str){
    const size=str.length;
    console.log("The string length is: ", size);

    if(size%2==0){
        console.log("size is even")
    }
    else{
        console.log("String length is odd.")
    }
}

strLength("I love Bangladesh");


//Sum of number from array using function
function SumOf(numbers){
    let sum=0;
    for(const number of numbers){
        console.log(number)
        sum+=number;
    }
    return sum
}

const num=[12,25,11,16,10];

console.log("The numbers are: ")
console.log("The sum of those number is:",SumOf(num));