function f(input) {
    let matrix = [];
    let sum = 0;
    for (const row of input) {
        matrix.push(row.split(" ").map(Number));
    }

    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];  
    }

    for (let i = matrix.length-1; i >= 0; i--) {
        sum += matrix[i][matrix.length-1-i];
        
    }

    console.log(sum);
}

f([
    "1 2 3",
    "4 5 6",
    "7 8 9"
])

f([
    "10 11",
    "14 15"
])