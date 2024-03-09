/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let vals = {}

    for (let i = 0; i < numbers.length; i++) {
        if (target - numbers[i] in vals) {
            return [vals[target - numbers[i]] + 1, i + 1]
        } else {
            vals[numbers[i]] = i
        }
    }
    return []
};

var twoSumTwopointer = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1

    while (i < j) {
        // 2, 7 ,11, 15
        if (numbers[i] + numbers[j] == target) {
            return [i + 1, j + 1]
        }
        if (numbers[i] + numbers[j] < target) {
            i++
        }
        if (numbers[i] + numbers[j] > target) {
            j--
        }
    }
    return []
}

console.log(twoSumTwopointer([2, 7, 11, 15], 9))