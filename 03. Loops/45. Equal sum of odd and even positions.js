function f(first, second) {
    isFound = false;
    for (let i = first; i <= second; i++) {
        let sumOdd = 0;
        let sumEven = 0;
        let number = String(i);
        for (let j = 0; j < number.length; j++) {
            if ((j+1) % 2 == 0) {
                sumEven += Number(number[j]);
            } else {
                sumOdd += Number(number[j]);
            }
        }
        if (sumEven == sumOdd) {
            isFound = true;
            console.log(i);
        }
    }

    if (!isFound) {
        console.log('None');
    }

}

f(100000, 100050)
f(299900, 300000)
f(100115, 100120)