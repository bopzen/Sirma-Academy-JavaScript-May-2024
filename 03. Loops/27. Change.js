function f(amount) {
    let amountSt = amount * 100;
    let twoLv = 0;
    let oneLv = 0;
    let fiftySt = 0;
    let twentySt = 0;
    let tenSt = 0;
    let fiveSt = 0;
    let twoSt = 0;
    let oneSt = 0;
    while (amountSt > 0) {
        if (amountSt >= 200) {
            twoLv += Math.floor(amountSt / 200);
            amountSt -= twoLv * 200;
        } else if (amountSt >= 100) {
            oneLv += Math.floor(amountSt / 100);
            amountSt -= oneLv * 100;
        } else if (amountSt >= 50) {
            fiftySt += Math.floor(amountSt / 50);
            amountSt -= fiftySt * 50;
        } else if (amountSt >= 20) {
            twentySt += Math.floor(amountSt / 20);
            amountSt -= twentySt * 20;
        } else if (amountSt >= 10) {
            tenSt += Math.floor(amountSt / 10);
            amountSt -= tenSt * 10;
        } else if (amountSt >= 5) {
            fiveSt += Math.floor(amountSt / 5);
            amountSt -= fiveSt * 5;
        } else if (amountSt >= 2) {
            twoSt += Math.floor(amountSt / 2);
            amountSt -= twoSt * 2;
        } else {
            oneSt += Math.floor(amountSt / 1);
            amountSt -= oneSt;
        }


    }
    console.log(twoLv + oneLv + fiftySt + twentySt + tenSt + fiveSt + twoSt + oneSt)
}

f(1.23)
f(2)
f(0.56)
f(2.73)