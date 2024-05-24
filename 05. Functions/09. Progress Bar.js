function printLoadingBar(n) {
    if (n < 100) {
        console.log(`${n}% [` + '%'.repeat(n/10) + '.'.repeat((100-n)/10) + ']');
        console.log('Loading...')
    } else {
        console.log(`[` + '%'.repeat(n/10) + ']');
        console.log('Complete!')
    }   
}

printLoadingBar(30)
printLoadingBar(50)
printLoadingBar(100)