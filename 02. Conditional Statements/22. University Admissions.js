function f(score, activities) {
    if (score >= 90) {
        console.log('Admitted')
    } else if (80 <= score && score <= 89) {
        if (activities >= 2) {
            console.log('Admitted')
        } else {
            console.log('Not Admitted')
        }
        
    } else {
        console.log('Not Admitted')
    }
}

f(85, 3)
f(88, 1)
f(91, 0)
f(75, 12)