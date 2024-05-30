function f(input) {
    console.log(input.length);
    console.log(input[0].length);
    let sum = input.reduce((totalSum, row) => {
        let rowSum = row.reduce((sum, element) => sum + element, 0);
        return totalSum + rowSum;
    }, 0);
    console.log(sum);
}

f([
    [7, 1, 3, 3, 2, 1],
    [1, 3, 9, 8, 5, 6],
    [4, 6, 7, 9, 1, 0]
])

f([
    [10, 11, 12, 13],
    [14, 15, 16, 17]
])