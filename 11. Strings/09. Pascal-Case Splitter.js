function f(text) {
    let regex = /[A-Z][a-z]*/gm
    let matches = text.match(regex);
    console.log(matches.join(", "));
}

f('SplitMeIfYouCan')
f('HoldTheDoor')
f('ThisIsSoAnnoying')