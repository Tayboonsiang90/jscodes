function decToBinarySum(n) {
    bin = 0
    for (let i = parseInt((Math.log(n)/Math.log(2))); i >= 0; i--) {
        if ((2 ** i) <= n) {
            bin = bin + 1
            n = n - (2 ** i);
        } 
    }
    return bin
}

var countBits = function (n) {
    sum = []
    for (let i = 0; i<=n; i++) {
        sum[i] = decToBinarySum(i)
    }
    return sum;
};
