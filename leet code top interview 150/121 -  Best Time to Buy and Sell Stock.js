/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))