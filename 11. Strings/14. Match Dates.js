function f(input) {
    let text = input.join(", ");
    let regex = /\d{2}([.|\-|/])[A-Z][a-z]{2}\1\d{4}/gm
    let matches = text.match(regex);
    for (const match of matches) {
        let [day, month, year] = match.split(/[.|\-|/]/gm)
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }

}

f(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016'])

f(['1/Jan-1951 23/October/197 11-Dec-2010 18.Jan.2014'])