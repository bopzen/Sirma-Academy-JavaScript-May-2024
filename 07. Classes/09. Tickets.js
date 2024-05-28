class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

}

function f(input) {
    let tickets = [];
    let criterion = input.pop();
    for (const ticketInfo of input) {
        const [destination, price, status] = ticketInfo.split("|");
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    
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