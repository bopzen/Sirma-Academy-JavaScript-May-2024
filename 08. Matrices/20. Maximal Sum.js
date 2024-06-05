function f(input) {
    let matrix = [];
    let maxSum = 0;
    let maxMatrix = [];

    for (const row of input) {
        matrix.push(row.split(" ").map(Number));
    }

    for (let i = 0; i < matrix.length-2; i++) {
        for (let j = 0; j < matrix[i].length-2; j++) {
            let sum = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2]
                    + matrix[i+1][j] + matrix[i+1][j+1] + matrix[i+1][j+2]
                    + matrix[i+2][j] + matrix[i+2][j+1] + matrix[i+2][j+2];

            if (sum > maxSum) {
                maxSum = sum;
                maxMatrix[0] = [matrix[i][j], matrix[i][j+1], matrix[i][j+2]];
                maxMatrix[1] = [matrix[i+1][j], matrix[i+1][j+1], matrix[i+1][j+2]];
                maxMatrix[2] = [matrix[i+2][j], matrix[i+2][j+1], matrix[i+2][j+2]];

            }
        } 
    }

    console.log(`Sum = ${maxSum}`);
    for (const row of maxMatrix) {
        console.log(row.join(" "));
    }
}

f([
    "1 5 5 2 4",
    "2 1 4 14 3",
    "3 7 11 2 8",
    "4 8 12 16 4"
])

f([
    "1 0 4 3 1 1",
    "1 3 1 3 0 4",
    "6 4 1 2 5 6",
    "2 2 1 5 4 1",
    "3 3 3 6 0 5"
])