function f(array) {
    let newArray = [];
    for (const element of array) {
        if (element < 0) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }
    }
    for (const element of newArray) {
        console.log(element);
    }
}

f([7, -2, 8, 9])
f([3, -2, 0, -1])