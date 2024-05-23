function f(latitude, hemisphere) {
    if (Math.abs(latitude) > 66.5) {
        console.log('Arctic Zone');
    } else if (Math.abs(latitude) >= 23.5) {
        console.log('Temperate Zone');
    } else if (Math.abs(latitude) > 0) {
        console.log('Tropic Zone');
    } else if (latitude == 0) {
        console.log('Equator');
    }
}

f(70, 'N')
f(45, 'S')
f(10, 'N')
f(0, 'N')
f(-85, 'S')
