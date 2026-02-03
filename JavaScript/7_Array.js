// Simple array declaration
const num = [1, 34, 56, 67, 8, 9, 53, 90]
console.log(num)

//lenght of array
console.log(num.length)



//Multiple string using array
const fruits = ["mango", "banana", "apple", "berry", "jackfruit"]
console.log(fruits)

//Printing specific array elements using index
console.log(fruits[2])

//Mixed array
const mixedArray = [1, "Rokan", "cse", true]
console.log(mixedArray)

//Push elements in mixedArray 
mixedArray.push("HSTU")
console.log(mixedArray)

//Pop elements from mixedArray
mixedArray.pop()
console.log(mixedArray)


//Using array for conditional statement
if (mixedArray.includes("Rokan")) {
   console.log("Hello! I'm on the list")
}


//Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const newReverse=[];
for(const color of colors)
{
   //console.log(color);
   newReverse.unshift(color);
   
}

console.log(newReverse);