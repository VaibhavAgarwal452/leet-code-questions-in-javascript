/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var vals = {}
    for (var i = 0; i < nums.length; i++) {

        if (nums[i] in vals && vals[nums[i]] > 1) {

            nums.splice(i, 1)
            i--
        } else {
            if (nums[i] in vals) {
                vals[nums[i]]++
            } else {
                vals[nums[i]] = 1
            }
        }
    }
};

removeDuplicates([1, 1, 1, 2, 2, 3]);