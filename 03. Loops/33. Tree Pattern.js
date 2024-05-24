function f(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n-i) + '* '.repeat(i) + ' '.repeat(n-i));      
    }
    console.log(' '.repeat(n-1) + '* ' + ' '.repeat(n-1)); 
}

f(6)
f(4)
f(3)