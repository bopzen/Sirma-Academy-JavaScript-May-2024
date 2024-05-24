function f(n) {
    console.log('#'.repeat(n + 2));
    for (let i = 1; i <= Math.floor((n+2)/2); i++) {
        if (i < Math.floor((n+2)/2)) {
            console.log(' '.repeat(i) + '#' + ' '.repeat(n-2*i) + '#');
        } else {
            if (n % 2 != 0) {
                console.log(' '.repeat(i) + '#');
            }
        }
    }        
    for (let i = Math.floor((n+2)/2)-1; i >= 1; i--) {
        if (i == Math.floor((n+2)/2)-1 && n % 2 == 0) {
            continue;
        }
        console.log(' '.repeat(i) + '#' + ' '.repeat(n-2*i) + '#');


    }

    console.log('#'.repeat(n + 2));
}

f(5)
f(8)
f(2)