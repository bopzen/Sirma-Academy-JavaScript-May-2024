function f(n) {
    for (let i = 1; i <= n-1; i++) {
        console.log(' '.repeat(n-1-i) + '* '.repeat(i));      
    }
    for (let i = 0; i < n-1; i++) {
        console.log(' '.repeat(Math.floor((n-1)/2)) + "*".repeat(n-1))
        
    }
}

f(7)
f(4)
f(6)