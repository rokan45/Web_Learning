//Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const newReverse=[];
for(const color of colors)
{
   //console.log(color);
   newReverse.unshift(color);
   
}

console.log(newReverse);