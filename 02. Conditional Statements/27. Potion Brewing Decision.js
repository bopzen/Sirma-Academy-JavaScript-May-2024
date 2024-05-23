function f(ingredient1, ingredient2) {
    if (ingredient1 == 'herbs') {
        if (ingredient2 == 'water') {
            console.log("Health potion");
        } else if (ingredient2 == 'oil') {
            console.log("Stealth potion")
        } else {
            console.log("Minor stamina potion")
        }
    } else if (ingredient1 == 'berries') {
        if (ingredient2 == 'sugar') {
            console.log("Speed potion");
        } else {
            console.log('Minor energy potion')
        }
    } else {
        console.log('No potion');
    }
}

f('herbs', 'water')
f('herbs', 'oil')
f('herbs', 'banana')
f('berries', 'sugar')
f('berries', 'banana')
f('herbs', 'sugar')
f('sugar', 'salt')