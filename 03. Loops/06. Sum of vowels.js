function f(text) {
    let vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
    let sum = 0
    for (const letter of text) {
        if (letter in vowels) {
            sum += vowels[letter];
        }
    }
    console.log(sum);
}

f("hello")
f("hi")
f("bye")
f("zzzz")