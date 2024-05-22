function f(yellow) {
    let red = yellow / 4;
    let white = yellow * 2;
    console.log(`Red: ${red}`);
    console.log(`Yellow: ${yellow}`);
    console.log(`White: ${white}`);
    console.log(`Total: ${yellow + white + red}`);
}

f(10);
f(17);
f(42);