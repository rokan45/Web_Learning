//Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

const reversed = statement.split(" ").reverse().join(" ");

console.log(reversed);

//Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

const number = [1, 2, 3];
console.log("Original:", number);
const copy = [];


for (const i of number) {
    copy.push(i);
}

copy[0] = 99;
console.log("Copy:", copy);

//Given an array of student objects, print each student’s name and marks.
let object1 = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]

for (const i of object1) {
    console.log(i.name + " scored " + i.marks);
}
