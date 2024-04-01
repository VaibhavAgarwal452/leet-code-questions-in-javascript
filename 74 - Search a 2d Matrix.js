/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let currentArray = []
    for (let i = 0; i < matrix.length; i++) {
        if (target <= matrix[i][matrix[i].length - 1]) {
            currentArray = matrix[i]
            break;
        }
    }
    currentArray
    if (currentArray.length > 0) {
        return search(currentArray, target)
    }
    return false
}

var search = function (nums, target) {

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
            return true
        }
    }
    return false
};

// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
console.log(searchMatrix([[1]], 1))
