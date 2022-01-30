//Not memoized
// function minCost(i, cost) {
//     if (i==1) {return 0}
//     if (i==2) {return Math.min(cost[i-1], cost[i-2])}
//     if ( minCost(i-1, cost) + cost[i-1] < minCost(i-2, cost) + cost[i-2] ) {
//         return minCost(i-1, cost) + cost[i-1]
//     } else { 
//         return minCost(i-2, cost) + cost[i-2]
//     }
// }

// var minCostClimbingStairs = function(cost) {
//     return minCost(cost.length, cost)
// };

//memoized
// function minCost(i, cost) {
//     if (i==1) {return arrayMinCost[0]}
//     if (i==2) {return arrayMinCost[1]}
//     if (arrayMinCost.length <= i-2) {
//         minCost(i-1, cost)
//     }
//     if ( arrayMinCost[i-2] + cost[i-1] < arrayMinCost[i-3] + cost[i-2] ) {
//         arrayMinCost[i-1] = arrayMinCost[i-2] + cost[i-1]
//         return arrayMinCost[i-1]
//     } else { 
//         arrayMinCost[i-1] = arrayMinCost[i-3] + cost[i-2]
//         return arrayMinCost[i-1]
//     }
// }

// var minCostClimbingStairs = function(cost) {
//     arrayMinCost = [0, Math.min(cost[0], cost[1])]
//     return minCost(cost.length, cost)
// };


//Redo
// function minCost(i, cost) {
//     if (i==0 || i==1) return cost[i]
//     return cost[i] + Math.min(minCost(i-1, cost), minCost(i-2, cost))
// }

// var minCostClimbingStairs = function(cost) {
//     len = cost.length
//     return Math.min(minCost(len-1, cost), minCost(len-2, cost))
// };

// cost = [1,2,3,4,5]
// console.log(minCostClimbingStairs(cost))

//memoization

function minCost(i, cost) {
    if (minCostArray.length <= i) { 
        minCostArray[i] = cost[i] + Math.min(minCost(i-1, cost), minCost(i-2, cost)) 
    }
    return minCostArray[i]
}


var minCostClimbingStairs = function(cost) {
    minCostArray = [cost[0], cost[1]]
    len = cost.length
    return Math.min(minCost(len-1, cost), minCost(len-2, cost))
};

cost = [1,2,3,4,5]
console.log(minCostClimbingStairs(cost))

