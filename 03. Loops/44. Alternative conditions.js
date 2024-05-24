function f(n) {
    let current = 1;
    let row = 1;
    while (current <= n) {
        let line = [];
        for (let i = 0; i < row; i++) {
            if (current <= n) {
                line.push(current);
                current++;
            } else {
                break;
            }    
        }
        console.log(' '.repeat(Math.ceil(n/2)-row) + line.join(" "));
        row++;
    }
}

f(7)
f(10)
f(12)