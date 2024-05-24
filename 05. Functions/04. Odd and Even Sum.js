function sumEvenAndOddDigits(n) {
    let summEven = 0;
    let sumOdd = 0;
    for (const digit of String(n)) {
        if (Number(digit) % 2 == 0) {
            summEven+=Number(digit);
        } else {
            sumOdd+=Number(digit);
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${summEven}`;
}

console.log(sumEvenAndOddDigits(1000435))
console.log(sumEvenAndOddDigits(3495892137259234))