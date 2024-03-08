/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const product = nums.reduce((a, b) => a * b)

    return nums.map((item, i) => {
        let a = 1
        if (item !== 0) {
            return product / item
        } else {
            nums.forEach((element, index) => {
                if (i !== index) {
                    a = a * element
                }
            });
            return a
        }
    })

};