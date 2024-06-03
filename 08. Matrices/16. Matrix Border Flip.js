function f(input) {
    let matrix = createMatrix(input);
    let borderElements = [];
    let m = matrix.length;

    for (let j = 0; j < m; j++) {
        borderElements.push(matrix[0][j]);      
    }
    for (let i = 1; i < m-1; i++) {
        borderElements.push(matrix[i][m-1]);      
    }
    for (let j = m-1; j >= 0; j--) {
        borderElements.push(matrix[m-1][j]);   
    }
    for (let i = m-2; i >= 1; i--) {
        borderElements.push(matrix[i][0]);       
    }

    borderElements.unshift(borderElements.pop())

    let index = 0;
    for (let j = 0; j < m; j++) {
        matrix[0][j] = borderElements[index];
        index++;      
    }
    for (let i = 1; i < m-1; i++) {
        matrix[i][m-1] = borderElements[index];
        index++      
    }
    for (let j = m-1; j >= 0; j--) {
        matrix[m-1][j] = borderElements[index];
        index++;
    }
    for (let i = m-2; i >= 1; i--) {
        matrix[i][0]  = borderElements[index];
        index++;       
    }

    printMatrix(matrix);
}


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

f([
    "1 2 3",
    "4 5 6",
    "7 8 9"
])

f([
    "0 1 0 0",
    "0 0 0 1",
    "1 0 0 0",
    "0 1 0 0"
])