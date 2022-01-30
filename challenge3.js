const prompt = require('./node_modules/prompt-sync')();

let wincondition = false;

let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

let count = 0;

function printBoard(board) {
    console.log("The board currently looks like this: ")
    for (i of board) {
        console.log(i)
    }
}

function getInput(playerName) {
    xCoord = parseInt(prompt(`Player ${playerName}: Put x-coordinate of your move: (1,2,3)`))
    yCoord = parseInt(prompt(`Player ${playerName}: Put y-coordinate of your move: (1,2,3)`))
    console.log(`You have keyed in (${xCoord},${yCoord})`)
    return [xCoord - 1, yCoord - 1]
}

function checkRow(row) {
    if (row[0] == 1 && row[1] == 1 && row[2] == 1) {
        return true;
    }
    if (row[0] == 2 && row[1] == 2 && row[2] == 2) {
        return true;
    }
    return false;
}



function checkWinCondition(board) {
    for (let i = 0; i < 3; i++) {
        if (checkRow([board[i][0], board[i][1], board[i][2]]) || checkRow([board[0][i], board[1][i], board[2][i]])) {
            return true;
        }
    }
    if (checkRow([board[0][0], board[1][1], board[2][2]])) {
        return true;
    }
    if (checkRow([board[2][0], board[1][1], board[0][2]])) {
        return true;
    }
    return false;
}

do {
    //Get input of player 1
    let coord1 = getInput(1)
    while (board[coord1[0]][coord1[1]] != 0) {
        console.log("Yo player 1 can u fill in a unfilled space. Please try again: ")
        coord1 = getInput(1)
    }
    board[coord1[0]][coord1[1]] = 1
    count++
    printBoard(board)
    //check win condition (break if won)
    if (checkWinCondition(board) == true) {
        console.log("Player 1 You have won!!!!")
        break
    } else {
        console.log("Player 1 You didn't win")
    }
    //check draw
    if (count == 9) {
        console.log("There is no winner bro")
        break
    }

    //Get input of player 2
    let coord2 = getInput(2)
    while (board[coord2[0]][coord2[1]] != 0) {
        console.log("Yo player 2 can u fill in a unfilled space. Please try again: ")
        coord2 = getInput(2)
    }
    board[coord2[0]][coord2[1]] = 2
    count++
    printBoard(board)
    //check win condition
    if (checkWinCondition(board) == true) {
        console.log("Player 2 You have won!!!!")
        break
    } else {
        console.log("Player 2 You didn't win")
    }
    //check draw
    if (count == 9) {
        console.log("There is no winner bro")
        break
    }

} while (true)