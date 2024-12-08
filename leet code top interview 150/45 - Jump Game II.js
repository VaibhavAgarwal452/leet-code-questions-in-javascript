/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let farthest = 0
    let current = 0
    let jumps = 0

    for (let i = 0; i < nums.length - 1; i++) {
        console.log(farthest)
        farthest = Math.max(farthest, nums[i] + i)
        if (i == current) {
            console.log(i, "i")
            current = farthest
            jumps++
        }
    }
    return jumps
};

console.log(jump([2, 3, 1, 1, 4]))