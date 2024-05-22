function f(n) {
    let sum = 0;
    let checkedNumber = n;
    while (n>0) {
        let current = n % 10;
        n = Math.floor(n /10);
        sum += current ** checkedNumber.toString().length
    }
    console.log(sum == checkedNumber);
}

f(153)
f(370)
f(123)
f(407)
f(1634)