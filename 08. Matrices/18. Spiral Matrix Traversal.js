function f(input) {
    let matrix = createMatrix(input);
    let spiralElements = [];
    let m = matrix.length;

    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = m - 1;

    while (top <= bottom && left <= right) {

        for (let j = left; j <= right; j++) {
            spiralElements.push(matrix[top][j]);   
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            spiralElements.push(matrix[i][right]);     
        }
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                spiralElements.push(matrix[bottom][j]);  
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                spiralElements.push(matrix[i][left]);     
            }
            left++;
        }
        
    }

    console.log(spiralElements.join(" "));


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
    "1 2 3 4",
    "5 6 7 8",
    "9 10 11 12",
    "13 14 15 16"
])

f([
    "1 2",
    "3 4"
])