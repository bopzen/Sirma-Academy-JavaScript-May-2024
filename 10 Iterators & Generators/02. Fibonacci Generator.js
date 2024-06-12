function* fibonacci() {
    let first = 1;
    let second = 1;
    yield first;
    yield second;

    while (true) {
        let current = first + second;
        first = second;
        second = current;
        yield current;
    }
}

const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

