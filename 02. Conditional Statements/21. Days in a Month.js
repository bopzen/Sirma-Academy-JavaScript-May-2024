function f(month) {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        console.log(30)
    } else if (month == 2) {
        console.log(28)
    } else  {
        console.log(31)
    }
}

f(1)
f(2)
f(4)
f(7)