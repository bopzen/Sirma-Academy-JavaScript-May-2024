function findShortestLongestWord(sentence) {
    let wordsArray = trimSymbols(sentence).split(" ");
    let shortestWord = wordsArray[0];
    let longestWord = wordsArray[0];
    
    for (const word of wordsArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }
    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);

}

findShortestLongestWord('Hello how are you today? I hope you are fine')
findShortestLongestWord('Lorem Ipsum is dummy text of the typesetting industry.')

function trimSymbols(string) {
    let newString = "";
    for (const symbol of string) {
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ '.toLowerCase().includes(symbol.toLowerCase())) {
            newString += symbol;
        }
    }
    return newString;
}