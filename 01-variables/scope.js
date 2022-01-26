//{} forms a scope

const prompt = require('prompt-sync')();
let age = parseInt(prompt("Please enter your age"))
if (age <67) {
    console.log("You cannot retire yet")
    console.log("Your cpf money is still frozen")
}


