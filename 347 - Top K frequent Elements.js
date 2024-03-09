/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let vals = {}
    if (nums.length <= 1) {
        return nums
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in vals) {
            vals[nums[i]]++
        } else {
            vals[nums[i]] = 1
        }
    }
    var tempArr = []
    let sortedArray = Object.entries(vals).sort((a, b) => b[1] - a[1])
    console.log(sortedArray, "sortedArray")
    for (let i = 0; i < sortedArray.length; i++) {
        console.log(sortedArray[i][0])
        if (i < k) {
            tempArr.push(Number(sortedArray[i][0]))
        }
    }
    return tempArr
};

console.log(topKFrequent([1], 1))