function f(a, b, c) {
    console.log(subtract(sum(a, b), c));
}

f(23, 6, 10)
f(1, 17, 30)
f(42, 58, 100)


function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}