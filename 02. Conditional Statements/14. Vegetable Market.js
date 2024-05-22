function f(vegetable, day, quantity) {
    let result;
    if (day == "Monday" 
        || day == "Tuesday" 
        || day == "Wednesday" 
        || day == "Thursday" 
        || day == "Friday") {
        if (vegetable == "tomato") {
            result = 2.5 * quantity;
        } else if (vegetable == "onion") {
            result = 1.2 * quantity;
        } else if (vegetable == "lettuce") {
            result = 0.85 * quantity;
        } else if (vegetable == "cucumber") {
            result = 1.45 * quantity;
        } else if (vegetable == "pepper") {
            result = 5.5 * quantity;
        } else {
            result = "Error";
        }
    } else if (day == "Saturday" || day == "Sunday") {
        if (vegetable == "tomato") {
            result = 2.8 * quantity;
        } else if (vegetable == "onion") {
            result = 1.3 * quantity;
        } else if (vegetable == "lettuce") {
            result = 0.85 * quantity;
        } else if (vegetable == "cucumber") {
            result = 1.75 * quantity;
        } else if (vegetable == "pepper") {
            result = 3.5 * quantity;
        } else {
            result = "Error";
        }
    } else {
        result = "Error";
    }
    if (result != "Error") {
        console.log(result.toFixed(2));
    } else {
        console.log(result);
    }
    
}

f("tomato", "Tuesday", 2)
f("onion", "Sunday", 3)
f("pepper", "Monday", 10)
f("banana", "Friday", 5)