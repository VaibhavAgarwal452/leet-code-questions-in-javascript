/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function (temperatures) {
//     const answer = []
//     for (let i = 0; i <= temperatures.length - 1; i++) {
//         for (let j = i + 1; j <= temperatures.length - 1; j++) {
//             if (temperatures[i] < temperatures[j]) {
//                 answer.push(j - i)
//                 break
//             }

//             if (j == temperatures.length - 1) {
//                 answer.push(0)
//             }
//         }
//         if (i == temperatures.length - 1) {
//             answer.push(0)
//         }
//     }
//     return answer
// };

var dailyTemperatures = function (temperatures) {
    let answer = new Array(temperatures.length).fill(0)
    let stack = []

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) {
            answer[i] = stack[stack.length - 1] - i
        }
        stack.push(i)
    }
    return answer
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))