function printChars(a, b) {
    let codeA = a.charCodeAt();
    let codeB = b.charCodeAt();
    let result = []
    for (let i = Math.min(codeA, codeB) + 1; i < Math.max(codeA, codeB); i++) {
        result.push(String.fromCharCode(i));      
    }
    console.log(result.join(" "));
}

printChars('a', 'd')
printChars('#', ':')
printChars('C', '#')