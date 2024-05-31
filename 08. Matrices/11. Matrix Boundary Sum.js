function f(input) {
    let matrix = createMatrix(input);
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (i == 0 || i == matrix.length-1) {
            sum += matrix[i].reduce((sum, curr) => sum + curr, 0);
        } else {
            sum += matrix[i][0] + matrix[i][matrix[i].length-1];
        }
    }

    console.log(sum);
}

f([
        "1 2 3",
        "4 5 6",
        "7 8 9"
])

f([
        "1 2 3 0",
        "4 5 6 7",
        "0 8 9 1"
])


function createMatrix(input) {
    let matrix = [];
    for (const row of input) {
        matrix.push(row.split(" ").map(Number));
    }
    return matrix;
}

