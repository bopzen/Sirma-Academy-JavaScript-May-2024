function f(input) {
    let matrix = createMatrix(input);
    let newMatrix = [];

    for (let j = 0; j < matrix.length; j++) {
        newMatrix[j] = [];
        for (let i = matrix.length-1; i >= 0; i--) {
            newMatrix[j].push(matrix[i][j]);
            
        }    
    }

    printMatrix(newMatrix);
    

}

f([
    "1 2 3",
    "4 5 6",
    "7 8 9"
])

f([
    "0 1 2 3",
    "4 5 6 7",
    "8 9 10 11",
    "12 13 14 15"
])

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