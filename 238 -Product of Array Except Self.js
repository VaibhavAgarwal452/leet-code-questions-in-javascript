/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     const product = nums.reduce((a, b) => a * b)

//     return nums.map((item, i) => {
//         let a = 1
//         if (item !== 0) {
//             return product / item
//         } else {
//             nums.forEach((element, index) => {
//                 if (i !== index) {
//                     a = a * element
//                 }
//             });
//             return a
//         }
//     })

// };

var ProductExceptSelf = function (nums) {
    let prefixProductArr = []
    let SuffixproductArr = []

    let currentPrefixProduct = 1
    let currentSuffixProduct = 1

    let result = []

    for (let i = 0; i < nums.length; i++) {
        currentPrefixProduct *= nums[i]
        prefixProductArr.push(currentPrefixProduct)
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        currentSuffixProduct *= nums[i]
        SuffixproductArr[i] = currentSuffixProduct
    }

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) result.push(SuffixproductArr[i])
        else if (i == nums.length - 1) result.push(prefixProductArr[i - 1])
        else result.push(prefixProductArr[i - 1] * SuffixproductArr[i + 1])
    }

    return result

}

ProductExceptSelf([1, 2, 3, 4])