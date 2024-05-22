function f(figure, a, b) {
    let area = 0;
    switch (figure) {
        case "square":
            area = a * a;
            break;
        case "rectangle":
            area = a * b;
            break;
        case "triangle":
            area = a * b / 2;
            break;
        case "circle":
            area = Math.PI * a * a;
            break;

    }
    console.log(area.toFixed(2));
}

f("square", 5);
f("rectangle", 10, 3.5);
f("triangle", 4.5, 20);
f("circle", 10);