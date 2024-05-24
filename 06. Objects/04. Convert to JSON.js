function f(name, surname, eyeColor) {
    let obj = {
        name, 
        lastName: surname,
        eyeColor,
    }
    let json = JSON.stringify(obj);
    console.log(json);
}

f("Ivan", "Ivanov", "blue")
f("Maria", "Petrova", "brown")