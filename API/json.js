console.log("Im here!");

const info={
    name:"Rokan",
    age:24,
    edu:"CSE",
    instute:"HSTU",
}

console.log(info);

//convert object to json using json.stringify
const infoToJson=JSON.stringify(info);
console.log(infoToJson, typeof infoToJson);    //json is string type

//to converst json to object using parse
const jsonToObject=JSON.parse(infoToJson);
console.log(jsonToObject, typeof jsonToObject);  