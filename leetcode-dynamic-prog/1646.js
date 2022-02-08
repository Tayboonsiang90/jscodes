//inefficient code
//recursive implemented

function generator(num) {
    if (num == 0) {return 0}
    if (num == 1) {return 1}
    if (num % 2 == 0) {return generator(num/2)}
    return generator((num-1)/2) + generator((num-1)/2+1)    
}

var getMaximumGenerated = function(n) {
    max = 0;
    for (let i = 0; i <= n; i++) {
        current = generator(i)
        if (current > max) {
            max = current
        }
    }
    return max
};

//memoization



