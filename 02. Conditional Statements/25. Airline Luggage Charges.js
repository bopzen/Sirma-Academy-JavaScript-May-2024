function f(weight, dimensions) {
    let overWeightFee = 0;
    let overSizeFee = 0;
    let handlingFee = 0;
    let excessSize = dimensions - 158
    if (weight > 50) {
        overWeightFee = 100;
    }
    if (dimensions > 158) {
        if (1 <= excessSize && excessSize <= 20) {
            overSizeFee = 50;
        } else if (excessSize <=50) {
            overSizeFee = 100;
        } else {
            overSizeFee = 200;
        }
    }
    if (overSizeFee !=0 && overWeightFee != 0) {
        handlingFee = 50;
    }
    console.log(`$${overWeightFee + overSizeFee + handlingFee}`)
}

f(52, 160)
f(48, 180)
f(55, 190)
