function f(matrix, range) {
    const [start, end] = range.split(":");
    const startRow = start.match(/\d+/)[0];
    const startCol = getColumnNumber(start.match(/[A-Z]+/)[0]);
    const endRow = end.match(/\d+/)[0];
    const endCol = getColumnNumber(end.match(/[A-Z]+/)[0]);

    let sum = 0;
    for (let i = startRow-1; i < endRow; i++) {
        for (let j = startCol-1; j < endCol; j++) {
            sum += matrix[i][j];
        }   
    }
    console.log(sum);

}

function getColumnNumber(column) {
    let columnNumber = 0;
    for (const letter of column) {
        let charValue = letter.charCodeAt() - 64;
        columnNumber = columnNumber * 26 + charValue;
    }
    return columnNumber
}

f([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
],
"A1:C2"
)

f([
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0]
],
"A1:B4"
)

f([
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]
],
"A1:C4"
)