function f(n) {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    isSpecial = true;
                    let number = `${i}${j}${k}${l}`
                    for (const digit of number) {
                        if (n % Number(digit) != 0) {
                            isSpecial = false;
                            break;
                        }
                    }
                    if (isSpecial) {
                        console.log(number)
                    }
                    
                }
            }
        }
        
    }
}

f(3)