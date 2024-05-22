function f(day) {
    let weekdays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]
    if (1 <= day && day <= 7) {
        console.log(weekdays[day-1]);
    } else {
        console.log('Invalid day!');
    }
}

f(3)
f(6)
f(11)