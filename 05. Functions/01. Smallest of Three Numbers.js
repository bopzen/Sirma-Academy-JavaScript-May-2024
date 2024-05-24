function findSmallestNumber(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

findSmallestNumber(2, 5, 3)
findSmallestNumber(600, 342, 123)
findSmallestNumber(25, 21, 4)