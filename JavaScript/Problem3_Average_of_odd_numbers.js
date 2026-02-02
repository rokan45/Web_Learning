//Average of the odd numbers
function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {

        if (number % 2 !== 0) {
            //console.log(number);
            odds.push(number);

        }
    }

    console.log(odds);

    let sum = 0;
    for (const number of odds) {
        sum += number;
    }

    const count=odds.length;
    const result = sum /count;

    return result.toPrecision(4);

}

const numbers = [12, 21, 34, 35, 67, 11, 33, 45];
const avg = oddAverage(numbers);
console.log("The average of the odd number is: ", avg);

