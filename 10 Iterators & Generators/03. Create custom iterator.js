class OddIterator {
    constructor(arr) {
        this.arr = arr;
    }

    [Symbol.iterator]() {
        let oddArr = this.arr.filter(number => number % 2 != 0)
        let index = 0;

        return {
            next() {
                return {
                    value: oddArr[index++],
                    done: index > oddArr.length
                }
            }
        }
    }
}

class OddIteratorGenerator {
    constructor(arr) {
        this.arr = arr;
    }

    [Symbol.iterator] = function*() {
        let oddArr = this.arr.filter(number => number % 2 != 0)
        for (const value of oddArr) {
            yield value.value
        }
    }
}


const arr = [1,2,3,4,5,6,7,8,9,10];
const oddValues = new OddIterator(arr);
for (const value of oddValues){ 
    console.log(value);
}

const oddValues2 = new OddIteratorGenerator(arr);
for (const value of oddValues){ 
    console.log(value);
}
