function analyzeText(str) {

    if (typeof str !== "string" || str.trim().length === 0) {
        return "Invalid";
    }

    let splitWord = str.split(" ");

    let fullLength = 0;
    let longWord = splitWord[0];

    for (const word of splitWord) {
        fullLength += word.length;

        if (word.length > longWord.length) {
            longWord = word;
        }
    }

    return { longwords: longWord, token: fullLength };
}

console.log(analyzeText(""));

