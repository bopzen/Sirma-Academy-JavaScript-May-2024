function f(input) {
    let matrix = [];
    let rowSum = [];
    let columnSum = [];

    for (const row of input) {
        matrix.push(row.split(" ").map(Number));
    }

    for (const row of matrix) {
        rowSum.push(row.reduce((sum, curr) => sum + curr, 0))
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[j][i];
            
        }
        columnSum.push(sum);
        
    }

    console.log(`Row Sums: ${rowSum.join(", ")}`);
    console.log(`Column Sums: ${columnSum.join(", ")}`);

}

f([
    "1 2",
    "3 4",
    "5 6"
])

f([
    "1 2 3",
    "4 5 6",
    "7 8 9"
])