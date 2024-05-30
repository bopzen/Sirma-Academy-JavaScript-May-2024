function f(matrix1, matrix2) {
    let isEqual = true;
    if (matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length) {
        isEqual = false;
    }

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] != matrix2[i][j]) {
                isEqual = false;
                break;
            }
        }
        if (!isEqual) {
            break;
        } 
    }


    if (isEqual) {
        console.log("equal");
    } else {
        console.log("not equal");
    }
}

f(
    [[1,2,3],
     [2,1,3]],
    [[1,2,3],
     [2,1,3]]
)

f(
    [[1,2,3],
     [4,5,6]],
    [[1,3],
     [4,5]]
)