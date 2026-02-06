/*function signature/sample */
function gonoVote(array) {

    if (!Array.isArray(array)) {
        return "Invalid";
    }
    else if (typeof array === "number") {
        return "Invalid"
    }

    
    let numYes = 0;
    let numNo = 0;

    for (const i of array) {
        if (i === "ha") {
            numYes++;
        }
        if (i === "na") {
            numNo++
        }
    }



    if (numYes > numNo) {
        return true;
    }
    else if (numNo > numYes) {
        return false;
    }
    else if (numYes == numNo) {
        return "equal";
    }

}

console.log(gonoVote(["ha", "na", "ha"]));


