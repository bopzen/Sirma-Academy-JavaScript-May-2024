function f(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n-i) + '* '.repeat(i) + ' '.repeat(n-i));      
    }
    for (let i = n -1; i > 0; i--) {
        console.log(' '.repeat(n-i) + '* '.repeat(i) + ' '.repeat(n-i));    
        
    }
}

f(1)
f(2)
f(3)
f(4)