function f(years) {
    let price = 0;
    if (0 <= years && years <= 12) {
        price = 5;
    } else if (years <= 19) {
        price = 8;
    } else {
        price = 10;
    }
    console.log(`$${price}`);
}

f(10)
f(16)
f(25)
f(13)