function checkPalindrome(array) {
    for (const element of array) {
        let reversedElement = "";

        for (let i = String(element).length-1; i >= 0; i--){
            reversedElement += String(element)[i];
        }
        if (element == reversedElement) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

checkPalindrome([123,323,421,121])
checkPalindrome([32,2,232,1010])