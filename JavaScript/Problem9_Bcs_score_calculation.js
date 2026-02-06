function finalScore(omr) {
    //write your code here
    const sum = omr.right + omr.wrong + omr.skip;

    if (sum <= 100 || omr === "object") {
        const negativeMarks = omr.wrong * 0.5;
        let totalMarks= omr.right-negativeMarks;

        return Math.round(totalMarks);

    }
    else{
        return "Invalid";
    }
}