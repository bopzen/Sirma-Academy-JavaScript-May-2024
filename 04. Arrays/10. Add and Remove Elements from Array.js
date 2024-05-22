function f(commands) {
    let number = 1
    let array = []
    for (const command of commands) {
        
        if (command == 'add') {
            array.push(number);
            number++;
        } else if (command == 'remove') {
            array.pop();
        }
    }
    if (array.length > 1) {
        console.log(array.join(" "));
    } else {
        console.log('Empty');
    }
}

f(['add', 'add', 'add', 'add'])
f(['add', 'add', 'remove', 'add', 'add'])
f(['remove', 'remove', 'remove'])