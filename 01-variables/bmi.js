const prompt = require('prompt-sync')();

let weight = parseFloat(prompt("Please enter your weight: "));
let height = parseFloat(prompt("Please enter your height: "));
let bmi = weight / height ** 2; 

console.log(`Your BMI is ${bmi}.`)