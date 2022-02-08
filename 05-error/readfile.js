const fs = require('fs')

fruits = fs.readFileSync('data.txt').toString().split('\r\n')

priceList = {
    apple:0.5,
    orange:0.7,
    pineapple:1,
    watermelon:2.5,
    durian:10
}

sum = 0; 

for (i of fruits) {
    sum += priceList[i.toLowerCase()]
}

console.log(sum)

