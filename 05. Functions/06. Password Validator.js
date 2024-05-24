function checkPassword(password) {
    isValid = true;
    
    if (!checkLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (!isAlphaNumeric(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (!check2digits(password)) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }

}

checkPassword('pass')
checkPassword('APass123')
checkPassword('Pa$s$s')

function checkLength(string) {
    if (!(6 <= string.length && string.length <= 10)) {
        return false;
    }
    return true;
}

function isAlphaNumeric(string) {
    let code;
    for (const element of string) {
        code = element.charCodeAt();
        if (!(code > 47 && code <58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
            return false;
        }
    }
    return true;
}

function check2digits(string) {
    let code;
    let countDigits = 0;
    for (const element of string) {
        code = element.charCodeAt();
        if (code > 47 && code < 58) {
            countDigits++;
        }
        if (countDigits == 2) {
            return true;
        }
    }
    return false;
}