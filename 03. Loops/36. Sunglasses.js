function f(n) {
    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
    for (let i = 0; i < n-2; i++) {
        
        if (i == Math.floor(((n-1) / 2) - 1)) {
            console.log('*' + '/'.repeat(2 * n - 2) + '*' + '|'.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*');
        } else {
            console.log('*' + '/'.repeat(2 * n - 2) + '*' + ' '.repeat(n) + '*' + '/'.repeat(2 * n - 2) + '*');
        }
        
    }

    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
}

f(3)
f(4)
f(5)