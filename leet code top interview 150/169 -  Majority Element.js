/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var vals = {}
    const arrLen = Math.trunc(nums.length / 2)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in vals) {
            vals[nums[i]] += 1
        } else {
            vals[nums[i]] = 1
        }
    }
    for (let key in vals) {
        if (vals[key] > arrLen) {
            return key
        }
    }

};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));