/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let vals = {}
    let flag = false
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in vals) {
            return true
        } else {
            vals[nums[i]] = 1
        }
    }
    return flag
};

console.log(containsDuplicate([1, 2, 3, 4]))