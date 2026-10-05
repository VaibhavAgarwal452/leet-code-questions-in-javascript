/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var arrLen = nums.length
    let i = 0, j = 0
    if (nums.length <= 1) return nums
    while (i < arrLen && j < arrLen) {
        if (nums[i] == 0 && nums[j] == 0) {
            j++
        } else if (nums[i] == 0 && nums[j] != 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
            i++
        } else {
            j++
            i++
        }
    }

    return nums
};


console.log(moveZeroes([1, 0]))