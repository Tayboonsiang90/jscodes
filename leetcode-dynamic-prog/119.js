// var getRow = function(rowIndex) {
//     if (rowIndex == 0) return [1]
//     pascal = [1,1]
//     for (let i = 2; i<= rowIndex; i++) {
//         tempPascal = [1]
//         for (let j = 1; j<i; j++) {
//             tempPascal[j] = pascal[j-1] + pascal[j]
//         }
//         tempPascal[i] = 1
//         pascal = tempPascal
//     }
//     return pascal;
// }

// console.log(getRow(4))

//speed optimization
var getRow = function(rowIndex) {
    pascal = [1]
    for (let i = 1; i <= rowIndex; i++) {
        pascal[i] = 0;
        for (let j = i; j > 0; j--) {
            pascal[j] = pascal[j] + pascal[j-1]
        }
    }
    return pascal;
}
console.log(getRow(2))