function f(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}

f(3)
f(5)
f(1)
f(0)
f(10)