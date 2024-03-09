/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (!s.length) {
        return true
    }
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    return cleanString == cleanString.split("").reverse().join("")
};

var isPalindromeTwoPointer = function (s) {
    if (!s.length) {
        return true
    }
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let i = 0;
    let j = cleanString.length - 1;
    while (i < j) {
        if (cleanString[i] == cleanString[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
};
console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("0p"))
