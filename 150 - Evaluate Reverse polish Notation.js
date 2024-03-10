/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    const operators = ["+", "-", "*", "/"]
    for (let token of tokens) {
        if (operators.includes(token)) {
            let operand1 = Number(stack.pop())
            let operand2 = Number(stack.pop())
            switch (token) {
                case "+":
                    stack.push(operand1 + operand2)
                    break;
                case "-":
                    stack.push(operand2 - operand1)
                    break;
                case "*":
                    stack.push(operand1 * operand2)
                    break;
                case "/":
                    stack.push(Math.trunc(operand2 / operand1))
                    break;
            }
        } else {
            stack.push(token)
        }
    }
    return stack.pop()
}
// console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
