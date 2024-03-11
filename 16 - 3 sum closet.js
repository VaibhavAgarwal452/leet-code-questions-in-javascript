/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length < 2) return 0
    nums.sort((a, b) => a - b)
    let closetValue = nums[0] + nums[1] + nums[2];
    let minDifference = 99999
    for (let i = 0; i < nums.length; i++) {
        const local = nums[i]
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let sum = local + nums[left] + nums[right]
            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else {
                return sum
            }

            let diff = Math.abs(sum - target)
            if (diff < minDifference) {
                minDifference = diff
                closetValue = sum
            }
        }
    }
    return closetValue
};

console.log(threeSumClosest([1, 2, 4, 8, 16], 20))
// console.log(threeSumClosest([-1, 2, 1, -4], 1))
