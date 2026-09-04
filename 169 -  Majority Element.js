/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var vals = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in vals) {
            vals[nums[i]] = vals[nums[i]] + 1
        } else {
            vals[nums[i]] = 1
        }
    }
    console.log(vals)
    const max = Object.entries(vals).sort((a, b) => b[1] - a[1])[0];
    console.log(max)
    return Number(max[0])
};