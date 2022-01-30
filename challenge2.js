const prompt = require('./node_modules/prompt-sync')();
let playerRoll = 100;

do{
    randomRoll1 = Math.floor((Math.random()*6))+1;
    console.log("Your first random dice roll is", randomRoll1)
    bet = Number(prompt("How much money do you want to bet? "))
    randomRoll2 = Math.floor((Math.random()*6))+1;
    randomRollSum = randomRoll1+randomRoll2
    console.log("Your second random dice roll is ", randomRoll2)

    if (randomRollSum==7) {
        playerRoll -= bet
        console.log("The sum was 7. You lost.")
        console.log("Your current amount is ", playerRoll)
    } else {
        playerRoll += bet
        console.log("The sum was ",randomRollSum,". You won.")
        console.log("Your current amount is ", playerRoll)
    }

} while(prompt("Do you want to continue? (Y/N) ") == "Y")

console.log("Your final amount is ", playerRoll)