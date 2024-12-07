/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function reverseArray(nums, l, r) {
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r - 1];
        nums[r - 1] = temp;
        l++;
        r--;
    }
    return nums;
}
var rotate = function (nums, k) {
    k = k % nums.length;
    let l = 0;

    // Reverse the whole array
    nums = reverseArray(nums, l, nums.length);

    // Reverse first k numbers of the updated nums array
    nums = reverseArray(nums, l, k);

    // Reverse the last nums.length - k numbers
    nums = reverseArray(nums, k, nums.length);
    console.log(nums)
};

rotate([1, 2], 4)