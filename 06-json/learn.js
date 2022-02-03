const fs = require('fs')

let numbers = [-1,3,-5,7]
fs.writeFileSync('data.json', JSON.stringify(numbers))

let data = fs.readFileSync('data.json')
let textString = data.toString();
let numba = JSON.parse(textString);
console.log(numba[2])


