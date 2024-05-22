function f(floors, rooms) {
    for (let i = floors; i >=1 ; i--) {
        let floorResult = "";
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                floorResult += `L${i}${j} `;
            } else {
                if (i % 2 == 0) {
                    floorResult += `O${i}${j} `;
                } else {
                    floorResult += `A${i}${j} `;
                }
            }
        }
        console.log(floorResult);       
    }
}

f(6, 4)
f(3, 3)
f(4, 4)
