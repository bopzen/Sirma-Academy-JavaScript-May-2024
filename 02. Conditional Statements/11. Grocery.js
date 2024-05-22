function f(product, city, quatity) {
    let price = 0;
    if (product == "tea") {
        if (city == "Sofia") {
            price = 0.5;
        } else if (city == "Plovdiv") {
            price = 0.4;
        } else if (city == "Varna") {
            price = 0.45;
        }
    } else if (product == "water") {
        if (city == "Sofia") {
            price = 0.8;
        } else if (city == "Plovdiv") {
            price = 0.7;
        } else if (city == "Varna") {
            price = 0.7;
        }
    } else if (product == "juice") {
        if (city == "Sofia") {
            price = 1.2;
        } else if (city == "Plovdiv") {
            price = 1.15;
        } else if (city == "Varna") {
            price = 1.10;
        }       
    } else if (product == "sweets") {
        if (city == "Sofia") {
            price = 1.45;
        } else if (city == "Plovdiv") {
            price = 1.3;
        } else if (city == "Varna") {
            price = 1.35;
        }
    } else if (product == "chips") {
        if (city == "Sofia") {
            price = 1.6;
        } else if (city == "Plovdiv") {
            price = 1.5;
        } else if (city == "Varna") {
            price = 1.55;
        }
    }
    console.log((quatity * price).toFixed(2));
}

f("tea", "Varna", 2)
f("chips", "Plovdiv", 1)
f("juice", "Sofia", 6)
f("sweets", "Plovdiv", 1)