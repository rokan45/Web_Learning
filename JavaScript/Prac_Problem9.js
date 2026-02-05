//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

const reversed = statement.split(" ").reverse().join(" ");

console.log(reversed);

//Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

const number = [1, 2, 3];
console.log("Original:",number);
const copy = [];


for (const i of number) {
    copy.push(i);
}

copy[0] = 99;
console.log("Copy:",copy);