function f(speed) {
    if (speed <= 10) {
        console.log('slow');
    } else if (speed <= 60) {
        console.log('average');
    } else if (speed <= 120) {
        console.log('fast');
    } else if (speed <= 160) {
        console.log('super-fast');
    } else {
        console.log('turbo-fast');
    }
}

f(10)
f(59)
f(120)
f(121)
f(183)
f(59.99)
f(60.001)
