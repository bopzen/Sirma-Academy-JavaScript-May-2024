function f(n) {
    let sum = 1;
    if (n<=0) {
        sum = 0;
    }
    let previousNumber1 = 0;
    let previousNumber2 = 0;
    let current = 1;
    for (let i = 1; i <n; i++) {
        previousNumber1 = previousNumber2;
        previousNumber2 = current;
        current = previousNumber1 + previousNumber2;
        sum += current;
    }
    console.log(sum);
}

f(3)
f(5)
f(1)
f(0)
f(10)