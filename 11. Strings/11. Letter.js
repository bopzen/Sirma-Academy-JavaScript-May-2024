function f(input) {
    let text = input[0];
    let words = input[1];
    let stringToChange = new RegExp('_{2,}', 'g')

    let holes = text.match(stringToChange);

    for (const hole of holes) {
        for (const word of words) {
            if (hole.length == word.length) {
                text = text.replace(hole, word);
                break;
            }
        }
    }
    console.log(text);

}

f(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])