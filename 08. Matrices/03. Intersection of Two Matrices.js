function f(input1, input2) {
    let matrix1 = [];
    let matrix2 = [];
    let newMatrix = [];

    for (const row of input1) {
        matrix1.push(row.split(" "))
    }

    for (const row of input2) {
        matrix2.push(row.split(" "))
    }

    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] == matrix2[i][j]) {
                row.push(matrix1[i][j]);
            } else {
                row.push("*");
            }
            
        }
        newMatrix.push(row);
    }
    
    for (const row of newMatrix) {
        console.log(row.join(" "));
    }

}

f(
    ["a b c d",
     "a b c d",
     "a b c d"],
    ["k b c k",
     "a b g d",
     "a k c d"]
)

f(
    ["1 2",
     "3 4",
     "5 6",
     "7 8",
     "9 1"],
    ["0 2",
     "3 1",
     "1 6",
     "7 4",
     "1 1"]  
)