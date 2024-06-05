function f(input) {
    let matrix = createMatrix(input);
    let isMagic = true;

    let sum = matrix[0].reduce((acc, curr) => acc + curr, 0);
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].reduce((acc, curr) => acc + curr, 0) != sum) {
            isMagic = false;
            break;
        }       
    }
    if (isMagic) {
        for (let j = 0; j < matrix.length; j++) {
            let currentSum = 0;
            for (let i = 0; i < matrix.length; i++) {
                currentSum += matrix[i][j];    
            }
            if (currentSum != sum) {
                isMagic = false;
                break;
            }
        }
    }
    if (isMagic) {
        let currentSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            currentSum += matrix[i][i] 
        }
        if (currentSum != sum) {
            isMagic = false;
        }

    }

    if (isMagic) {
        let currentSum = 0;
        for (let i = matrix.length-1; i >= 0; i--) {
            currentSum += matrix[i][matrix.length-1-i];         
        }
        if (currentSum != sum) {
            isMagic = false;
        }
    }


    if (isMagic) {
        console.log("True");
    } else {
        console.log("False");
    }
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
    "1 0 0 0",
    "0 0 0 1",
    "0 1 0 0",
    "0 0 1 0"
])

f([
    "8 1 6",
    "3 5 7",
    "4 9 2"
])