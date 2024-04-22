/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let idx = -1
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] < target) {
            start = mid + 1
        } else if (nums[mid] > target) {
            end = mid - 1
        } else {
            return mid
        }
        idx = mid + 1
    }
    return idx
};

console.log(searchInsert([1, 3, 5, 6], 7))