function f(array, n) {
    for (let i = 0; i < n; i++) {
        array.unshift(array.pop());
        
    }
    console.log(array.join(" "));
}

f(['1', '2', '3', '4'], 2)
f(['Banana', 'Orange', 'Coconut', 'Apple'], 15)