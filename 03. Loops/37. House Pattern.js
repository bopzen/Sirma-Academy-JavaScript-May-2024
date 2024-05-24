function f(n) {
    for (let i = 1; i <= n; i+=2) {
        console.log(' '.repeat(n - i) + '* '.repeat(i));      
    }
    console.log('*' + ' '.repeat(2 * n - 3) + '*'); 
    console.log('*' + ' '.repeat(2 * n - 3) + '*'); 
}

f(7)
f(4)
f(3)