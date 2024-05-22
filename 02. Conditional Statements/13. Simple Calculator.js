function f(a, b, operation) {
    if (operation == "add") {
        console.log((a + b).toFixed(2));
    } else if (operation == "subtract") {
        console.log((a - b).toFixed(2));
    } else if (operation == "divide") {
        if (b == 0) {
            console.log("Cannot divide by 0");
        } else {
            console.log((a / b).toFixed(2));
        }  
    } else if (operation == "multiply") {
        console.log((a * b).toFixed(2));
    }
}

f(5, 5, "add")
f(10, 12, "subtract")
f(9, 3, "divide")
f(5, 2, "divide") 
f(3.1, 0.1, "multiply")