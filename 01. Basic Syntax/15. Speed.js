function f(distance, hours, minutes, seconds) {
    let speed = distance / (seconds + minutes * 60 + hours * 60 * 60);
    console.log(speed.toFixed(6));
}

f(100, 1, 20, 20);
f(2500, 5, 56, 23);
f(600, 7, 35, 55);