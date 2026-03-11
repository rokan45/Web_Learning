const storeToLs=()=>{
    const storeNumber=Math.ceil(Math.random()*100);
    console.log(storeNumber);
    localStorage.setItem('number',storeNumber);
}

const getNumberLS=()=>{
    const getNumber=localStorage.getItem('number');
    console.log(getNumber);
}