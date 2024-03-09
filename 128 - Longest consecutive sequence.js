/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length <= 1) {
        return nums.length
    }
    let tempArr = nums.sort((a, b) => a - b)
    let lastElement = nums[0]
    let counter = 1
    let maxCounter = 0
    Array.from(new Set(tempArr)).forEach(item => {

        if (item - lastElement == 1) {
            counter++
            if (counter > maxCounter) {
                maxCounter++
            }
            lastElement = item
        } else {
            if (counter > maxCounter) {
                maxCounter = counter
            }
            lastElement = item
            counter = 1
        }
    })
    return maxCounter
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([1, 2, 0, 1]))
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))
