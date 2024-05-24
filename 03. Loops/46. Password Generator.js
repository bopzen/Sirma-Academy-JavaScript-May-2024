function f(n, i) {
    for (let firstDigit = 1; firstDigit < n; firstDigit++) {
        for (let secondDigit = 1; secondDigit < n; secondDigit++) {
            for (let firstLetter = 0; firstLetter < i; firstLetter++) {
                for (let secondLetter = 0; secondLetter < i; secondLetter++) {
                    for (let thirdDigit = Math.max(firstDigit, secondDigit) + 1; thirdDigit <=n; thirdDigit++) {
                        console.log(`${firstDigit}${secondDigit}${String.fromCharCode(97+firstLetter)}${String.fromCharCode(97+secondLetter)}${thirdDigit}`);                   
                    }
                }                
            }
        }       
    }
}

f(2, 4)
f(3, 1)