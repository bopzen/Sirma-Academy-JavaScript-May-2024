function f(limitOne, limitTwo, limitThree) {
    for (let i = 2; i <= limitOne; i++) {
        for (let j = 2; j <= limitTwo; j++) {
            for (let k = 2; k <= limitThree; k++) {
                if (i % 2 == 0 && checkPrime(j) && k % 2 == 0) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
        
    }
}

f(3, 5, 5)
f(6, 2, 6)

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