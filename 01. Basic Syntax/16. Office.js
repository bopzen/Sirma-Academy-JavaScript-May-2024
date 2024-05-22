function f(n1) {
    let n2 = n1 - n1 * 0.2;
    let n3 = (n1 + n2) * 1.15;
    console.log((n1 + n2 + n3).toFixed(3));
}

f(380);
f(720.50);
f(455.30);