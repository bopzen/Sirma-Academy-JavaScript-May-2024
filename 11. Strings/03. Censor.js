function f(text, word) {
    let replacement = "";
    for (let i = 0; i < word.length; i++) {
        replacement += '*';    
    }

    console.log(text.replaceAll(word, replacement));
}

f('A small sentence with some words','small')
f('Find the hidden word', 'hidden')
f('A small sentence with small words', 'small')