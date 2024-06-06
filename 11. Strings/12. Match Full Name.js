function f(text) {
    let regex = /\b[A-Z][a-z]*\s[A-Z][a-z]*\b/gm 

    let matches = text.match(regex);
    console.log(matches.join(", "));
}

f("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov")