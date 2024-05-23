function f(lostGames, priceHeadset, priceMouse, priceKeyboard, priceDisplay) {
    let trashedHeadset = 0;
    let trashedMouse = 0;
    let trashedKeyboard = 0;
    let trashedDisplay = 0;

    for (let i = 1; i <= lostGames; i++) {
        if (i % 2 == 0) {
            trashedHeadset++;
        }
        if (i % 3 == 0) {
            trashedMouse++;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            trashedKeyboard++;
        }      
    }

    trashedDisplay = Math.floor(trashedKeyboard / 2);
    console.log(`Rage expenses: ${(trashedHeadset * priceHeadset + trashedMouse * priceMouse + trashedKeyboard * priceKeyboard + trashedDisplay * priceDisplay).toFixed(2)} lv.`);
}

f(7, 2, 3, 4, 5)
f(23, 12.50, 21.50, 40, 200)