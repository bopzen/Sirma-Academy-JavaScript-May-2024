function f(input) {
    let [n, method] = input.split(" ");
    n = Number(n);
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        matrix.push(row);
    }
    let number = 1;
    for (let i = 0; i < n; i++) {
        if (method == "B" && i % 2 != 0) {
            for (let j = n-1; j >= 0; j--) {
                matrix[j][i] = number++;
            }
        } else {
            for (let j = 0; j < n; j++) {
                matrix[j][i] = number++;
            }
        }
        
        
    }
    for (const row of matrix) {
        console.log(row.join(" "));
    }
}

f("3 A")
f("3 B")