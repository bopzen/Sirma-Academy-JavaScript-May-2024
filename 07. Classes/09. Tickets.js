class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }

}

function f(ticketsInput, criterion) {
    let tickets = [];
    for (const ticketInfo of ticketsInput) {
        const [destination, price, status] = ticketInfo.split("|");
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    
    tickets.sort((a, b) => {
        if (criterion === 'price') {
            return a.price - b.price;
        } else {
            return a[criterion].localeCompare(b[criterion]);
        }
    });
    console.log(tickets)

}

f(["Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed"],
    "destination")

f(["Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed"],
    "status")