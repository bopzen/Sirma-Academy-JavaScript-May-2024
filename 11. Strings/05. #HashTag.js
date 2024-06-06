function f(text) {
    let words = text.split(" ");
    for (const word of words) {
        if (word.startsWith('#') && word.length > 1) {
            console.log(word.substring(1));
        }
    }
}

f('Everyone uses # to tag a #special word in #facebook')
f('The symbol # is known #variously in English-speaking #regions as the #number sign')