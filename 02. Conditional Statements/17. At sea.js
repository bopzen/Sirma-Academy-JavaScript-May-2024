function f(days, room, feedback) {
    let totalPrice = 0;

    switch (room) {
        case 'single room':
            totalPrice = (days-1) * 25;
            break;
        case 'apartment':
            totalPrice = (days-1) * 50;
            if (days < 10) {
                totalPrice = totalPrice - totalPrice * 0.3;
            } else if (days <= 15) {
                totalPrice = totalPrice - totalPrice * 0.35;
            } else {
                totalPrice = totalPrice - totalPrice * 0.5;
            }
            break;
        case 'president apartment':
            totalPrice = (days-1) * 100;
            if (days < 10) {
                totalPrice = totalPrice - totalPrice * 0.1;
            } else if (days <= 15) {
                totalPrice = totalPrice - totalPrice * 0.15;
            } else {
                totalPrice = totalPrice - totalPrice * 0.2;
            }
            break;
    }

    if (feedback == 'positive') {
        totalPrice = totalPrice + totalPrice*0.25;
    } else {
        totalPrice = totalPrice - totalPrice*0.1;
    }

    console.log(totalPrice.toFixed(2));
}

f(11, 'apartment', 'positive')
f(30, 'president apartment', 'negative')
f(12, 'single room', 'positive')
f(2, 'apartment', 'positive')