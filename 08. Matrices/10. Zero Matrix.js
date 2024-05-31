function f(input) {
    let matrix = [];
    let rows = new Set();
    let cols = new Set();

    for (const row of input) {
        matrix.push(row.split(" ").map(Number));
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                rows.add(i);
                cols.add(j)
            } 
        }   
    }

    for (const row of rows) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[row][j] = 0;
        }
    }

    for (const col of cols) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }

    printMatrix(matrix);

}

f([
    "1 2 3",
    "4 0 6",
    "7 8 9"
])

f([
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"
])

function printMatrix(matrix) {
    for (const row of matrix) {
        console.log(row.join(" "));
    }
}