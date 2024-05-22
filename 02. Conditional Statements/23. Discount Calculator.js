function f(age, member) {
    if (age < 18) {
        console.log("10% discount");
    } else if (age <= 64) {
        if (member == "Yes") {
            console.log("20% discount");
        } else {
            console.log("10% discount");
        }      
    } else  {
        console.log("30% discount");
    }
}

f(20, 'Yes')
f(15, 'No')
f(70, 'No')