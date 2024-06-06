function f(word, text) {
    if (text.toLowerCase().includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

f('javascript', 'JavaScript is the best programming language')
f('python', 'JavaScript is the best programming language')