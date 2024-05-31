function f(input) {
    let matrix = createMatrix(input);
    let rows = new Set();
    let cols = new Set();
    let mainDiagonal = new Set();
    let antiDiagonal = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] == 1) {
                if (rows.has(i) || cols.has(j) || mainDiagonal.has(i+j) || antiDiagonal.has(i-j)) {
                    console.log('Yes');
                    return;
                }
                rows.add(i);
                cols.add(j);
                mainDiagonal.add(i+j);
                antiDiagonal.add(i-j);
            }
        }
    }

    console.log('No')

}

f(
    [
        "0 1 0 0",
        "0 0 0 1",
        "1 0 0 0",
        "0 0 1 0"
    ]
)

f(
    [
        "0 1 0 0",
        "0 0 0 1",
        "1 0 0 0",
        "0 1 0 0"
    ]
)

f(
    [
        "0 1 0 0",
        "0 0 0 0",
        "1 0 0 0",
        "0 0 0 0"
    ]
)

function createMatrix(input) {
    let matrix = [];
    for (const row of input) {
        matrix.push(row.split(" ").map(Number));
    }
    return matrix;
}

function printMatrix(matrix) {
    for (const row of matrix) {
        console.log(row.join(" "));
    }
}