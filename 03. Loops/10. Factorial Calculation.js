function f(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    console.log(fact);
}

f(3)
f(5)
f(1)
f(0)
f(10)