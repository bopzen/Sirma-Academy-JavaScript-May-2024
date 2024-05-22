function f(m, n) {
    
    for (let i = 0; i < m; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            if (i==0 || i==m-1) {
                line += '*';
            } else {
                if (j==0 || j==n-1) {
                    line += '*';
                } else {
                    line += ' ';
                }      
            }
        }
        console.log(line);
    }
}

f(4, 6)
f(2, 2)
f(3, 4)
