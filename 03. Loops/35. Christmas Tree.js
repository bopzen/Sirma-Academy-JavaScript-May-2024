function f(n) {
    for (let i = 0; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(i) + ' | ' + '*'.repeat(i));
        
    }
}

f(1)
f(2)
f(3)
f(4)