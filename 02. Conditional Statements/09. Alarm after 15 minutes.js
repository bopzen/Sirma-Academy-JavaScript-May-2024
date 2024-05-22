function f(hour, minutes) {
    let newMinutes;
    let newHour;
    if (minutes + 15 < 60) {
        newMinutes = minutes + 15;    
        newHour = hour;   
    } else {
        newMinutes = minutes + 15 - 60;
        if (hour == 23) {
            newHour = 0;
        } else {
            newHour = hour + 1;
        }
    }
    console.log(`${newHour}:${newMinutes.toString().padStart(2, '0')}`);
}

f(1, 47)
f(0, 2)
f(23, 59)
f(11, 7)
f(12, 48)