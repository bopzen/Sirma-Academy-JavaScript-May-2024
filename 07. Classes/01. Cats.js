class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`)
    }
}


function f(input) {
    let cats = [];

    for (const command of input) {
        const [name, age] = command.split(" ")
        let cat = new Cat(name, Number(age));
        cats.push(cat);
    }
    
    for (const cat of cats) {
        cat.meow();
    }
}

f(['Mellon 2', 'Tom 3'])
f(['Branch 1', 'Poppy 3', 'Goldy 2'])