/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const openingBracket = ["(", "{", "["]
    const closingBracket = [")", "}", "]"]
    if (s.length % 2 !== 0) {
        return false
    }

    for (var i = 0; i < s.length; i++) {
        if (openingBracket.includes(s[i])) {
            stack.push(s[i])
        } else {
            if ((stack[stack.length - 1] === "(" && s[i] === ")") || (stack[stack.length - 1] === "{" && s[i] === "}") || (stack[stack.length - 1] === "[" && s[i] === "]")) {

                if (stack[stack.length - 1] === "(" && s[i] === ")") {
                    stack.pop()
                }

                if (stack[stack.length - 1] === "{" && s[i] === "}") {
                    stack.pop()
                }

                if (stack[stack.length - 1] === "[" && s[i] === "]") {
                    stack.pop()
                }
            } else {
                return false
            }
        }

    }
    if (stack.length !== 0) {
        return false
    }
    return true

};