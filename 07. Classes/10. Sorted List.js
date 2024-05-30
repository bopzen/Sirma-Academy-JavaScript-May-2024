class List {
    #array;
    constructor() {
        this.#array = [];
    }
    
    add(element) {
        this.#array.push(Number(element));
        this.#array.sort((a, b) => a-b);
    }

    remove(index) {
        if (index < 0 || index >= this.#array.length) {
            throw new Error('Index out of range');
        }
        this.#array.splice(index, 1);
        this.#array.sort((a, b)=> a-b);

    }

    get(index) {
        if (index < 0 || index >= this.#array.length) {
            throw new Error('Index out of range');
        }
        return this.#array[index];
    }

    get size() {
        return this.#array.length;
    }

    toString() {
        return `[ ${this.#array.join(", ")} ]`
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

