function f(n, k) {
    let result = [1]
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i-1; j > i-1-k; j--) {
            sum += result[j];
            if (j == 0) {
                break;
            }  
        }
        result.push(sum);
        
    }
    console.log(result.join(" "));
}

f(6, 3)
f(8, 2)