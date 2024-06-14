function f(array) {
    array[Symbol.iterator] = function*() {
        for (let i = this.length-1; i >= 0; i--) {
            yield this[i];
        }
    }
    let result = []
    for (const element of array) {
        result.push(element)
    }
    console.log(result.join(", "));

}


f([1,2,3])
f(['a','b','c'])
f([5,4,3,2,1])
