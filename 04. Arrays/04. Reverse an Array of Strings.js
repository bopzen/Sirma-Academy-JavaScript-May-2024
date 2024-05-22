function f(array) {
    for (let i = 0; i < Math.floor(array.length) / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp;      
    }
    console.log(array.join(" "));
}

f(['a', 'b', 'c', 'd', 'e'])
f(['abc', 'def', 'hig', 'klm','nop'])
f(['33', '123', '0', 'dd'])
