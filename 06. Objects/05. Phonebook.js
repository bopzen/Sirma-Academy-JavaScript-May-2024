function f(array) {
    let phoneBook = {};
    for (const element of array) {
        let parts = element.split(" ");
        let name = parts.shift();
        let phone = parts.join(" ");
        phoneBook[name] = phone;
    }
    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

f(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"])
f(["Maria 123", "Samantha 456", "Nicole 789"])