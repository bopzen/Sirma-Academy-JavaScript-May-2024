class StringContainer {
    #innerString;
    #innerLength;
    constructor(string, initialLength) {
    this.#innerString = string;
    this.#innerLength = Number(initialLength);
    }

    increase(value) {
        this.#innerLength += value;
    }

    decrease(value) {
        this.#innerLength = Math.max(0, this.#innerLength - value);
    }

    toString() {
        if (this.#innerLength < this.#innerString.length) {
            return `${this.#innerString.substr(0,this.#innerLength)}...`;
        } else {
            return this.#innerString.substr(0,this.#innerLength);
        }
        
    }
}

let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
