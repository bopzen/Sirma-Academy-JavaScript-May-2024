function f(numOne, numTwo, numThree) {
    let sequence = 0;
    let isFound = false;
    for (let i = numOne; i <= numTwo; i++) {
        for (let j = numOne; j <= numTwo; j++) {
            sequence++;
            if (i + j == numThree) {
                isFound = true;
                console.log(`Combination ${sequence} - (${i} + ${j} = ${numThree})`);
                break;
            }
            
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${sequence} combinations - neither equals ${numThree}`);
    }


}

f(1, 10, 5)
f(23, 24, 20)
f(1, 2, 3)