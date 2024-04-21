/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const vals = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in vals) {
            nums.splice(i, 1)
            i--
        } else {
            vals[nums[i]] = 1
        }
    }
    return nums.length

};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));