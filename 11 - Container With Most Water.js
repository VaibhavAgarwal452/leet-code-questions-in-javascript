/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        let area = 0;
        if (height[left] < height[right]) {
            const localHeight = Math.min(height[left], height[right])
            const localWidth = right - left
            area = Math.abs(localHeight * localWidth)
            console.log(left, right, "=>a", localHeight, localWidth, area)
            left++

        } else {
            const localHeight = Math.min(height[left], height[right])
            const localWidth = left - right
            area = Math.abs(localHeight * localWidth)
            console.log(left, right, "=>", localHeight, localWidth, area)
            right--
        }
        if (area > maxArea) {
            maxArea = area
        }
    }
    return maxArea
};

console.log(maxArea([1, 1]))