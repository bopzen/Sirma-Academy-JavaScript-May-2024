function f(oneLeva, twoLeva, fiveLeva, sum) {
    for (let i = 0; i <= oneLeva; i++) {
        for (let j = 0; j <= twoLeva; j++) {
            for (let k = 0; k <= fiveLeva; k++) {
                if (i * 1 + j * 2 + k * 5 == sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }    
    }
}

f(3, 2, 3, 10)
f(5, 3, 1, 7)
