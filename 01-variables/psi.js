const prompt = require('prompt-sync')();

let psi = parseFloat(prompt("Please enter the psi: "));
let quality = 0;
if (psi <= 150) {
    quality = "healthy"
} else if (psi <= 300) {
    quality = "unhealthy"
} else {
    quality = "hazardous";
}

console.log(quality)