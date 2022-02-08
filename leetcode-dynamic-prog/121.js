//
var maxProfit = function(prices) {
    len = prices.length;
    currentmax = 0;
    currentlow = prices[0];

    for (let i = 0; i <= len; i++) {
        if (prices[i] < currentlow) {
            currentlow = prices[i]
        }
        if (prices[i] - currentlow > currentmax) {
            currentmax = prices[i] - currentlow
        }
    }
    return currentmax
};

console.log(maxProfit([5,3,2,5,3]))