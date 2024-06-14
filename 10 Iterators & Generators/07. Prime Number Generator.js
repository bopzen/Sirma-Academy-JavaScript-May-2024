function* primeNumber() {
    let n = 2;
    yield n++;

    while (true) {
        let isPrime = true;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break
            }
            
        }
        if (isPrime) {
            yield n;
        }
        n++;
        
    }

}

let primeNumberGenerator = primeNumber();
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
console.log(primeNumberGenerator.next().value);
