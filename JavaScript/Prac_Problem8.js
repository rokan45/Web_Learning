//Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const newReverse=[];
for(const color of colors)
{
   //console.log(color);
   newReverse.unshift(color);
   
}

console.log(newReverse);

//Write a JavaScript code to get the even numbers from an array using any looping technique.

const randomNUM = [12, 98, 5, 41, 23, 78, 46];

for(const num of randomNUM){
    if(num%2===0){
        console.log(num);
    }
}