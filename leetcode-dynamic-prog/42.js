var trap = function(height) {
    len = height.length
    blockStart = 0
    totalWater = 0
    blockWater = 0

    for (let i = 0; i < len; i++) {
        if (height[i] > blockStart) {
            blockStart = height[i]
        }
        blockWater += height[i] - blockStart

    }

    
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))