function f(age, gender) {
    if (gender == 'm') {
        if (age >=16) {
            console.log('Mr.')
        } else {
            console.log('Master')
        }
    } else {
        if (age >=16) {
            console.log('Ms.')
        } else {
            console.log('Miss')
        }
    }
}

f(14, "f")
f(17, "m")
f(10, "m")
f(32, "f")