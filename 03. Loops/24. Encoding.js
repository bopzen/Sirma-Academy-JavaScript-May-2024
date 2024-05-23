function f(number) {
    while (number > 0) {
        let digit = number % 10;
        let char = String.fromCharCode(digit+33);
        let line = "";
        if (digit == 0) {
            console.log('ZERO');
        } else {
            for (let i = 0; i < digit; i++) {
                line += char 
            }
            console.log(line);
        }
        number = Math.floor(number/10);
    }
}

f(2049)
f(9347439)