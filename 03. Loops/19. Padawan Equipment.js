function f(money, students, priceLightsabers, priceRobes, priceBelts) {
    let freeBelts = Math.floor(students / 6)
    let moneyNeeded = (students + Math.ceil(students * 0.1)) * priceLightsabers + students * priceRobes + (students - freeBelts) * priceBelts

    if (money >= moneyNeeded) {
        console.log(`The money is enough - it would cost ${moneyNeeded.toFixed(2)}lv.`);
    } else {
        console.log(`George Lucas will need ${(moneyNeeded - money).toFixed(2)}lv more.`);
    }

}

f(100, 2, 1.0, 2.0, 3.0)
f(100, 42, 12.0, 4.0, 3.0)