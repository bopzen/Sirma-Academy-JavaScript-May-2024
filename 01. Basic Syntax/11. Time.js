function f(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    console.log(`${minutes}:${remainingSeconds}`);
}

f(60);
f(90);
f(325);