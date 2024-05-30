function f(input) {
    let cars = {};
    for (const line of input) {
        const [carBrand, carModel, producedCars] = line.split(" | ");

        if (!cars[carBrand]) {
            cars[carBrand] = {};
            let brand = cars[carBrand];
            brand[carModel] = Number(producedCars);
        } else {
            let brand = cars[carBrand];
            if (!brand[carModel]) {
                brand[carModel] = Number(producedCars);
            } else {
                brand[carModel] += Number(producedCars);
            }
        }
    }

    let result = '';
    for (let brand in cars) {
        result += `${brand}\n`;
        for (let model in cars[brand]) {
            result += `###${model} -> ${cars[brand][model]}\n`;
        }
    }

    return result;
    

}

console.log(f(
    ["Audi | Q7 | 1000",
        "Audi | Q6 | 100",
        "BMW | X5 | 1000",
        "BMW | X6 | 100",
        "Citroen | C4 | 123",
        "Volga | GAZ-24 | 1000000",
        "Lada | Niva | 1000000",
        "Lada | Jigula | 1000000",
        "Citroen | C4 | 22",
        "Citroen | C5 | 10"]
))