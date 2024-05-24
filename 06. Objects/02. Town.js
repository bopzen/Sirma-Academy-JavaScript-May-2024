function f(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`)
    }
}

f(
    {
    name: 'Sofia',
    population: 1234567,
    country: 'Bulgaria',
    postcode: '1000'
    }
)