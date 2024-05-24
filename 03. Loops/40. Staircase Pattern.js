function f(n) {
    j = 1;
    k = 2;
    for (let i = 1; i <= n; i++) {
        if (i > 2) {
            console.log(' '.repeat(j) + '#'.repeat(i))
            j+=k;
            k++;
        } else {
            console.log('#'.repeat(i));
        }
        
        
    }
}

f(6)
f(4)
f(2)