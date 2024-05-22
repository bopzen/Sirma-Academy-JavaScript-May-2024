function f(array) {
    let min1 = array[0];
    let min2 = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min1) {
            min1 = array[i]
        } 
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min2 && array[i] != min1) {
            min2 = array[i]
        } 
    }
    console.log([min1, min2].join(" "));
}

f([30, 15, 50, 5])
f([3, 0, 10, 4, 7, 3])