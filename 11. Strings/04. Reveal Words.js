function f(words, text) {
    let wordsArray = words.split(', ');
    for (const word of wordsArray) {
        let searchString = "";
        for (let i = 0; i < word.length; i++) {
            searchString += '*';
        }
        text = text.replace(searchString, word);
    }
    console.log(text);
}

f('great' ,'JavaScript* is ***** programming language')
f('the, best, learn', 'JavaScript is *** **** language to *****')