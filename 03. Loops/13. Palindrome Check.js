function f(text) {
    let reversedText = "";
    for (let i = text.length-1; i >=0; i--) {
        reversedText += text[i];
    }
    if (text == reversedText) {
        console.log(true);
    } else {
        console.log(false);
    }
}

f("radar")
f("hello")
f("racecar")
f("java")
f("madam")