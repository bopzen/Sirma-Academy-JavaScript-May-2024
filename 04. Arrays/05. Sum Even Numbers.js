function f(array) {
    let sumEven = 0;
    for (const element of array) {
        if (Number(element) % 2 == 0) {
            sumEven += Number(element);
        }
    }
    console.log(sumEven);
}

f(['1','2','3','4','5','6'])
f(['3','5','7','9'])
f(['2','4','6','8','10'])