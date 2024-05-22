function f(k, array) {
    let first = []
    let last = []
    for (let i = 0; i < k; i++) {
        first.push(array[i]);
    }
    console.log(first.join(" "));
    
    for (let i = array.length-k; i < array.length; i++) {
        last.push(array[i]);
    }
    console.log(last.join(" "));
}

f(2, [7, 8, 9])
f(3, [6, 7, 8, 9])
