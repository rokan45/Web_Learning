function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mal(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}

function calculator(a,operation,b){
    if(operation==='+'){
        const result=add(a,b);
        return result;
    }
    else if(operation==='-'){
        const result=sub(a,b);
        return result;
    }
    else if(operation==='*'){
        const result=mul(a,b);
        return result;
    }
    else if(operation==='/'){
        const result=div(a,b);
        return result;
    }
}

