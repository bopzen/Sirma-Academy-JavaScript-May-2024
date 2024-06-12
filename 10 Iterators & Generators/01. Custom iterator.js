const obj = {
    a: 'apple',
    b: 'banana',
    c: 'cherry'
};

obj[Symbol.iterator] = function() {
    const values = Object.values(this);
    let index = 0;
    return {
        next() {
            return {
                value: values[index++],
                done: index > values.length
            }           
        }        
    }  
};

const obj2 = {
    a: 'apple',
    b: 'banana',
    c: 'cherry'
};

obj2[Symbol.iterator] = function*() {
    for (const value of Object.values(this)) {
        yield value;
    } 
};


for (const value of obj) {
    console.log(value);
}

for (const value of obj2) {
    console.log(value);
}
