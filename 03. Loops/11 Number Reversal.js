function f(n) {
    let result = "";
    let numberString = n.toString();
    for (let i = numberString.length-1; i >= 0; i--) {
        result += numberString[i];
    }
    console.log(result);
}

f(9876)
f(505)
f(10203)
f(7)