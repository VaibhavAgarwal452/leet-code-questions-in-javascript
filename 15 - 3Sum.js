/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let output = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        const target = 0 - nums[i]
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            if ((nums[left] + nums[right]) < target) {
                left++
            } else if ((nums[left] + nums[right]) > target) {
                right--
            } else {
                output.push([nums[i], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]) left++
                while (nums[left] === nums[right - 1]) right--
                left++
                right--
            }
        }
    }
    return output
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([3, 0, -2, -1, 1, 2]))