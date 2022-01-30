// function pascal(num) {
//     array = [1]
//     if (num == 1) {return array}
//     for (let i=1; i < num-1; i++) {
//         array.push( printArray[num-2][i-1] + printArray[num-2][i] )
//     }
//     array.push(1)
//     return array
// }

// var generate = function(numRows) {
//     printArray = []
//     for (let i=1; i <= numRows; i++) {
//         printArray.push(pascal(i))
//     }
//     return printArray 
// };

// console.log(generate(5))

//Solution 2
// var generate = function(numRows) {
//     //initialize
//     printArray = []
//     //for numRows = 1
//     printArray.push([1])
//     //for numRows = 2 onwards
//     for (let i = 1; i < numRows; i++) {
//         printArray.push([1])
//         for (let j = 1; j < i; j++) {
//             printArray[i].push(printArray[i-1][j-1]+printArray[i-1][j])
//         }
//         printArray[i].push(1)
//     }
//     return printArray 
// };

// console.log(generate(5))

//solution 3
var generate = function(numRows) {
    //initialize
    printArray = []
    //for numRows = 1
    printArray[0]=[1]
    //for numRows = 2 onwards
    for (let i = 1; i < numRows; i++) {
        printArray[i] = []
        printArray[i] = [1]
        for (let j = 1; j < i; j++) {
            printArray[i][j] = printArray[i-1][j-1]+printArray[i-1][j]
        }
        printArray[i].push(1)
    }
    return printArray 
};

console.log(generate(5))