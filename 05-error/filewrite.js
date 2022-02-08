const prompt = require('prompt-sync')();
const fs = require('fs')

validFruits = ['apple', 'orange', 'pineapple', 'watermelon', 'durian']
text = ""

while (true) {
    let line = prompt("Yo give me a fruit: ")
    if (!(validFruits.includes(line))) {
        console.log("U didn't give me a valid fruit bro.")
        break
    }
    text += line + '\n'
}

fs.appendFileSync
fs.writeFileSync('data1.txt', text)