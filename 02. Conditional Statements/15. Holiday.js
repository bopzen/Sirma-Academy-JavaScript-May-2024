function f(budget, season) {
    let destination, accomodation, expenses;
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            accomodation = 'Camp';
            expenses = budget * 0.3;
        } else if (season == "winter") {
            accomodation = 'Hotel';
            expenses = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = 'Europe';
        if (season == 'summer') {
            accomodation = 'Camp';
            expenses = budget * 0.4;
        } else if (season == "winter") {
            accomodation = 'Hotel';
            expenses = budget * 0.8;
        }
    } else {
        destination = 'Asia';
        accomodation = 'Hotel';
        expenses = budget * 0.9;
    }


    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${expenses.toFixed(2)}`);
}

f(50, 'summer')
f(75, 'winter')
f(312, 'summer')
f(678.53, 'winter')
f(1500, 'summer')