function f(input) {
    let array = input.split(" ").map(Number);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let tempResult = [array[i]];
        for (let j = i+1; j < array.length; j++) {
            if (array[j] != array[i]) {
                break;
            }
            tempResult.push(array[j]);
        }
        if (tempResult.length >= result.length)
            result = tempResult;
    }
    console.log(result.join(" "));
}

f("2 2 2 3 4 4 2 2 2 1")
f("1 1 1 2 3 1 3 3 1 1")
f("1 1 2 3 4 5 6 2 2")
f("4 4 4 4")
f("0 1 1 2 2 3 3 4 4 5 5")
