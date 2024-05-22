function f(array) {
    let result = []
    for (let i = array.length-1; i >= 0; i--) {
        if (i % 2 != 0) {
            result.push(array[i] * 2);
        }      
    }
    console.log(result.join(" "));
}

f([10, 15, 20, 25])
f([3, 0, 10, 4, 7, 3])