function f(matrix1, matrix2) {
    let newMatrix = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = []
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        newMatrix.push(row);
    }
    for (const row of newMatrix) {
        console.log(row.join(" "));
    }

}

f(
    [[1,2],[3,4]],
    [[2,2],[2,2]]
)

f(
    [[1,2,3],[4,3,1]]
    ,
    [[1,2,3],[4,2,2]]
)