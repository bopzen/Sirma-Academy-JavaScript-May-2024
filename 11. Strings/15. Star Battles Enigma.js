function f(input) {
    let planets = {};
    const regex = /(?<=@)(?<Planet>[A-Z|a-z]+)\w*:(?<Population>\d+)\w*!\w*(?<Attack>[A|D])\w*!\w*->(?<Soldiers>\d+)\w*/gm
    for (const encryptedMessage of input) {
        let decryptionKey = 0;
        for (const char of encryptedMessage) {
            if (['s', 't', 'a', 'r'].includes(char.toLowerCase())) {
                decryptionKey++
            }
        }  
        let decryptedMessage = "";
        for (const char of encryptedMessage) {
            decryptedMessage += String.fromCharCode(char.charCodeAt() - decryptionKey);
        }

        let matches = decryptedMessage.matchAll(regex)
        for (const match of matches) {
            let planet = match.groups
            if (!planets[planet['Attack']]) {
                planets[planet['Attack']] = [];
            }
            planets[planet['Attack']].push(planet['Planet'])
        }
    }   
    if (planets['A']) {
        console.log(`Attacked planets: ${planets['A'].length}`);
        for (const planet of planets['A']) {
            console.log(`-> ${planet}`)
        }
    } else {
        console.log(`Attacked planets: 0`);
    }

    if (planets['D']) {
        console.log(`Destroyed planets: ${planets['D'].length}`);
        for (const planet of planets['D']) {
            console.log(`-> ${planet}`)
        }
    } else {
        console.log(`Destroyed planets: 0`);
    }
}

f([
    'STCDoghudd4=53333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
])

f([
    "tt(''DGsvywgerx&gt;6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&;2C9555SR'
])