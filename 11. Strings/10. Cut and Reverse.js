function f(text) {
    let half = Math.floor(text.length / 2);
    let left = text.substring(0, half);
    let right = text.substring(half);
    console.log(left.split("").reverse().join(""))
    console.log(right.split("").reverse().join(""))

}

f('tluciffiDsIsihTgnizamAoSsIsihT')
f('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')