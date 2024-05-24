function f(n) {
    for (let i = 1; i < n; i++) {
        console.log(' '.repeat(n-i) +'*'.repeat(i));     
    }

    for (let i = n-2; i >=1 ; i--) {
        console.log(' '.repeat(n-i) +'*'.repeat(i));       
    }
    
}

f(5)
f(4)
f(10)