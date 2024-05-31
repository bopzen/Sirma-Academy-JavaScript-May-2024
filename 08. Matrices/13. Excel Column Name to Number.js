function f(column) {
    let columnNumber = 0;
    for (const letter of column) {
        let charValue = letter.charCodeAt() - 64;
        columnNumber = columnNumber * 26 + charValue;
    }
    console.log( columnNumber);
}

f('AB')
f('A')
f('c')
f('CZ')
f('MM')