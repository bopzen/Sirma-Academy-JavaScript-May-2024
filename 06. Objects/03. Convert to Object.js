function f(json) {
    let data = JSON.parse(json);
    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`)
    }
}

f('{"name": "Ivan", "age": 40, "town": "Sofia"}')

f('{"firstName": "Ivan", "lastName": "Ivanov"}')