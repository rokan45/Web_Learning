//if the iteration loop reached 20, it will stop execute 
for (let num = 0; num < 45; num++) {
    console.log(num);
    if(num>20){

        break;
    }
}


//Continue works like skip that number or elements. it will print skipping 20
for (let num = 0; num < 45; num++) {
    
    if(num==20){
        continue;
    }
    console.log(num);
}