/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*/
var searchMatrix = function (matrix, target) {
    let row = 0;
    let column = matrix[0].length - 1
    while (row <= column) {

        console.log(row, column)
        if (target < matrix[row][column]) {
            column--
        } else if (target > matrix[row][column] && row < matrix.length - 1) {
            row++
        } else if (target === matrix[row][column]) {
            return true
        } else {
            return false
        }
    }
    return false
};

// console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5))
console.log(searchMatrix([[5], [6]], 6))