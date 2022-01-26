//add prompt to your program
//terminal: yarn add prompt-sync

//1. do once per new directory or do in parent directory

const prompt = require('./node_modules/prompt-sync')();

let s = prompt("Whats your name?: ");
console.log("Hi", s); //return value is a string
