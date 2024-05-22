function f(input) {
    let array = input.shift().split(" ");
    for (const element of input) {
        let command = element.split(" ");
        let action = command[0];
        if (action == "Add") {
            let number = command[1];
            array.push(number);
        } else if (action == "Remove") {
            let number = command[1];
            array.splice(array.indexOf(number), 1);
        } else if (action == "RemoveAt") {
            let index = command[1];
            array.splice(index, 1);
        } else if (action == "Insert") {
            let number = command[1];
            let index = command[2];
            array.splice(index, 0, number);
        }
    }
    console.log(array.join(" "));
}


f(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])
