function f(renovationPrice, powders, lipsticks, spirals, shadows, correctors) {
    let revenue = 
        powders * 2.6
        + lipsticks * 3
        + spirals * 4.1
        + shadows * 8.2
        + correctors * 2;
    let totalProducts = powders + lipsticks + spirals + shadows + correctors;
    if (totalProducts >= 50) {
        revenue = revenue - revenue * 0.25;
    }
    let profit = revenue - revenue * 0.1;
    if (profit >= renovationPrice) {
        console.log(`Yes! ${(profit - renovationPrice).toFixed(2)} BGN left.`)
    } else {
        console.log(`Not enough money! ${(renovationPrice - profit).toFixed(2)} BGN needed.`)
    }
}

f(40.8, 20, 25, 30, 50, 10)
f(320, 8, 2, 5, 5, 1)