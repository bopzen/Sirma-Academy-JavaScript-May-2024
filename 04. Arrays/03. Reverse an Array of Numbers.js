function f(n, array) {
    let reversedArray = [];
    for (let i = n-1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    console.log(reversedArray.join(", "));
}

f(3, [10, 20, 30, 40, 50])
f(4, [-1, 20, 99, 5])
f(2, [66, 43, 75, 89, 47])
