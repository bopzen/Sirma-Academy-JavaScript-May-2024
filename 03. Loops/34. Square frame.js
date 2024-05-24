function f(n) {
    for (let i = 1; i <= n; i++) {
        if (i == 1 || i == n) {
            console.log('+ ' + '- '.repeat(n-2) + '+ ');
        } else {
            console.log('| ' + '- '.repeat(n-2) + '| ');
        }
        
    }
}

f(3)
f(4)
f(5)
f(6)