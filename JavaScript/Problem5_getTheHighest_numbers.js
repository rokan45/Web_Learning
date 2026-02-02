//To get the buggest number from array using function
const heights = [12, 21, 34, 35, 67, 11, 33, 45];

function getHighest(numbers) {
    
    let max = numbers[0];

    for (const number of numbers) {
        console.log(number);
        if (number > max) {
            max = number;
        }
    }
return max;
}

const max = getHighest(heights);
console.log("max value is: ", max);