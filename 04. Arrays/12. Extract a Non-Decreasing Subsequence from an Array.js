function f(array) {
    
    let biggestElement = array[0]
    let newArray = [biggestElement]
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= biggestElement) {
            newArray.push(array[i]);
            biggestElement = array[i];
        }
    }
    console.log(newArray.join(" "));
}

f([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
f([ 1, 2, 3, 4])
f([ 20, 3, 2, 15, 6, 1])