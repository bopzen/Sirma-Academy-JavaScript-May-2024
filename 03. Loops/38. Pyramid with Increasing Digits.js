function f(n) {
    for (let i = 1; i <= n; i++) {
        let line = [];
        for (let j = i; j <= 2* i - 1; j++) {
            line.push(j) 
        }
        for (let j = 2 * i - 2; j >= i ; j--) {
            line.push(j) 
        }

        console.log(' '.repeat(n-i) + `${line.join("")}` + ' '.repeat(n-i));      
    }

}

f(5)
f(4)
f(3)