/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let currentMinPrice = prices[0]
    let maximumProfit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            maximumProfit += prices[i + 1] - prices[i]
        }
    }
    return maximumProfit
};

console.log(maxProfit([7, 6, 4, 3, 1]));