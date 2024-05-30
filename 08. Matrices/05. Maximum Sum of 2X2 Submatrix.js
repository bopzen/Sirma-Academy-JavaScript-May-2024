function f(input) {
    let matrix = [];
    let maxSum = 0;
    let maxMatrix = [];

    for (const row of input) {
        matrix.push(row.split(" ").map(Number));
    }

    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[i].length-1; j++) {
            let sum = matrix[i][j] + matrix[i][j+1] + matrix[i+1][j] + matrix[i+1][j+1];
            if (sum > maxSum) {
                maxSum = sum;
                maxMatrix[0] = [matrix[i][j], matrix[i][j+1]];
                maxMatrix[1] = [matrix[i+1][j], matrix[i+1][j+1]];
            }
        } 
    }

    console.log(maxSum);
    for (const row of maxMatrix) {
        console.log(row.join(" "));
    }
}

f([
    "7 1 3 3 2 1",
    "1 3 9 8 5 6",
    "4 6 7 9 1 0"
])

f([
    "10 11 12 13",
    "14 15 16 17"
])