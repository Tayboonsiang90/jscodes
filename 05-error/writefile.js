const prompt = require('prompt-sync') ();
const fs = require('fs')
let filename = "story.txt"

// story = ""
// do {
//     line = prompt('>')

// }

while(true) {
    let line = prompt(">");
    if (line == '-1') break
    fs.appendFileSync(filename, line + '\n')
}

// fs.writeFileSync(filename, story)