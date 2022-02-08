const fs = require('fs')

let data = fs.readFileSync('kek.txt')
let text = data.toString().split('\n');
console.log(text)






// a = 4874657576656
// b = (a.toString(16))
// console.log(b.toString(10))

