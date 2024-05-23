function f(time, environment, item) {
    if (time == 'day') {
        if (environment == 'forest') {
            if (item == 'knife') {
                console.log('Hunt for food');
            } else if (item == 'container') {
                console.log('Collect berries');
            } else {
                console.log('Explore');
            }
        } else if (environment == 'desert') {
            if (item == 'hat') {
                console.log('Search for water');
            } else {
                console.log('Find shade');
            }
        }
    } else if (time == 'night') {
        if (environment == 'forest') {
            if (item == 'firestarter') {
                console.log('Make a campfire');
            } else {
                console.log('Climb on a tree');
            }
        } else if (environment == 'desert') {
            if (item == 'blanket') {
                console.log('Sleep');
            } else {
                console.log('Keep moving to stay warm');
            }
        }
    }
}



f('day', 'forest', 'knife')
f('day', 'forest', 'container')
f('night', 'forest', 'firestarter')
f('day', 'forest', 'bag')
f('night', 'desert', 'blanket')
f('day', 'desert', 'hat')
f('night', 'desert', 'sword')
f('night', 'forest', 'hat')