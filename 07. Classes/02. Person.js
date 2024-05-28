class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
        this.email = email;
    }

    toString() {
        return `${this.firstName}${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

function f() {
    let person = new Person('Homer', 'Simpson', 42, 'homer@yahoo.com');
    console.log(person.toString());
}

f();
