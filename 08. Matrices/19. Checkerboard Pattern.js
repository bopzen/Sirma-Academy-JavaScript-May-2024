function f(n) {
    let checkerboard = [];
    for (let i = 0; i < n; i++) {
        checkerboard[i] = [];
        for (let j = 0; j < n; j++) {
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                checkerboard[i][j] = 0;
            } else {
                checkerboard[i][j] = 1;
            }
        }
        
    }

    printMatrix(checkerboard);
}

function printMatrix(matrix) {
    for (const row of matrix) {
        console.log(row.join(" "));
    }
}

f(3)
f(4)