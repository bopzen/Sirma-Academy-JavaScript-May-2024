function factorialDivision(a, b) {
    console.log((factorial(a)/factorial(b)).toFixed(2))
}

factorialDivision(5, 2)
factorialDivision(6, 2)

function factorial(n) {
    if (n < 1) {
        return 1
    }
    return n * factorial(n-1);
}