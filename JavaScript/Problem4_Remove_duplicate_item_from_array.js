const numbers=[11,34,45,55,11,56,77,10,34,56,10,20,22,21,20,10,77];
function noDuplicate(numbers){
    const unique=[];
    for(const number of numbers){
        //console.log(number)
        if(unique.includes(number)===false){
            unique.push(number);
        }
    }
    console.log(unique);

}

let UniqeList=noDuplicate(numbers);
console.log(UniqeList);
