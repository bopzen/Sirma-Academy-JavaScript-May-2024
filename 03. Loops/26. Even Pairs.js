function f(first, second, diffFirst, diffSecond) {
    for (let i = 0; i <= diffFirst; i++) {
        let currentFirst = first + i;
        for (let j = 0; j <= diffSecond; j++) {
            let currentSecond = second + j;
            if (checkPrime(currentFirst) && checkPrime(currentSecond)) {
                console.log(`${currentFirst}${currentSecond}`);
            }
        }
        
    }
}

f(10, 20, 5, 5)
f(10, 30, 9, 6)

function checkPrime(number) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }      
    }
    return isPrime;
}