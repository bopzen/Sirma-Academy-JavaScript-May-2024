function f(input) {
    let matrix = [];
    let result = [];
    result[0] = [];
    result[1] = [];
    for (const row of input) {
        matrix.push(row.split(" "));
    }

    for (let i = 0; i < matrix.length; i++) {
        result[0].push(matrix[i][i]);  
    }

    for (let i = matrix.length-1; i >= 0; i--) {
        result[1].push(matrix[i][matrix.length-1-i]);
        
    }

    for (const row of result) {
        console.log(row.join(" "));
    }
}

f([
    "1 2 3",
    "1 2 3",
    "1 2 3"
])

f([
    "1 2 3 2",
    "1 1 2 4",
    "1 2 1 4",
    "2 2 3 1"
])