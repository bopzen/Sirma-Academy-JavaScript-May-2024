class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.producer = info.producer;
        this.age = info.age;
        this.brand = info.brand;

        this.quality = quality;
    }
    isOn = false;

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            this.quality--;
        }
    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            this.quality--;
        }
    }

    showInfo() {
        return JSON.stringify(this.info)
    }

    get price() {
        return 800 - this.age * 2 + this.quality * 0.5;
    }

}

let info = {producer: "Asus", age: 2, brand: "Zenbook"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)


// let info = {producer: "Lenovo", age: 1, brand: "Legion"}
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// laptop.turnOn()
// laptop.turnOff()
// console.log(laptop.isOn)