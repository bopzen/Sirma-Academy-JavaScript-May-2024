function f(products) {
    products.sort();
    for (let i = 0; i < products.length; i++) {
        console.log(`${i+1}.${products[i]}`)
        
    }
}

f(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])