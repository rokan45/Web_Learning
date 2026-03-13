const storeToLs=()=>{
    const storeNumber=Math.ceil(Math.random()*100);
    console.log(storeNumber);
    localStorage.setItem('number',storeNumber);
}

const getNumberLS=()=>{
    const getNumber=localStorage.getItem('number');
    console.log(getNumber);
}

const setObjLs=()=>{
    const obj1={name:'Rokan',age:24,profession:'Web Developero'}
    const objtoStri=JSON.stringify(obj1);
    console.log(objtoStri);
    localStorage.setItem('myInfo',objtoStri);
}

const getObjLS=()=>{
    const getObj=localStorage.getItem('myInfo');
    const stringToobj=JSON.parse(getObj);
    console.log(stringToobj);
}