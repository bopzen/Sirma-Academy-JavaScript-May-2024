function f(text) {
    let currentChar = text[0];
    let result = currentChar;
    for (let i = 1; i < text.length; i++) {
        if (text[i] == currentChar) {
            continue;
        } else {
            currentChar = text[i];
            result += currentChar;
        }
    }
    console.log(result);
}

f('aaaaabbbbbcdddeeeedssaa')
f('qqqwerqwecccwd')