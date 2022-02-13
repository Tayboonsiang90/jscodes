let main = function (i) {
    [coordX, coordY] = coordinatesForward(i);

    //check if there is a piece already
    if (Math.abs(board[coordX][coordY]) == 1) {
        announcement.innerText = "Please select an empty spot!";
        return;
    }
    //check validity
    if (!check(coordX, coordY, turn ? 1 : -1)) {
        announcement.innerText = "This is an invalid spot.";
        return; 
    }
    //check which turn is it
    announcement.innerText = "Flipping...";
    turn ? board[coordX][coordY] = 1 : board[coordX][coordY] = -1
    turn = (turn + 1) % 2
    turn ? status.innerText = "\u26AB Black Turn. \u26AB" : status.innerText = "\u26AA White Turn. \u26AA"
    color(coordX, coordY)
    //flip the pieces
    flip(coordX, coordY, board[coordX][coordY])
}

//Selectors
let boxes = document.querySelectorAll('.box')
let announcement = document.querySelector('#message')
let status = document.querySelector('#status')
//Array Board
board = []
for (let i = 0; i < 10; i++) { board[i] = Array(10).fill(0) }
//Set starting pieces
board[4][4] = 1 //black
color(4, 4)
board[4][5] = -1 //white
color(4, 5)
board[5][4] = -1 //white
color(5, 4)
board[5][5] = 1 //black
color(5, 5)
//Turn: 0: White, 1: Black
turn = 0;
//Add event listener
for (let i = 0; i < 64; i++) {
    boxes[i].addEventListener("click", function () { main(i) })
}

//Colour the pieces
function color(a, b) {
    let i = coordinatesBackward(a, b)
    if (board[a][b] == 1) {
        boxes[i].innerText = "\u26AB"
    } else if (board[a][b] == -1) {
        boxes[i].innerText = "\u26AA"
    }
}

//0 to 63 to [a,b]
function coordinatesForward(num) {
    let x = [];
    x[0] = Math.floor(num / 8) + 1;
    x[1] = (num % 8) + 1;
    return x;
}

//(0 to 8, 0 to 8) to 0 to 63
function coordinatesBackward(a, b) {
    return (a-1) * 8 + (b-1);
}

//flip horizontally for now
function flip(i, j, t) {
    flipUp(i, j, t)
    flipLeft(i, j, t)
    flipRight(i, j, t)
    flipDown(i, j, t)
    flipTopLeft(i,j,t)
    flipTopRight(i,j,t)
    flipBotLeft(i,j,t)
    flipBotRight(i,j,t)
}

function flipUp(i, j, t) {
    //search if its valid
    let search = 0;
    index = i;
    while (board[index - 1][j] == -t) {
        if (board[index - 2][j] == t) {search = 1}
        index--;
    } 

    //switch
    while (board[i - 1][j] == -t & search) {
        board[i - 1][j] = t;
        color(i - 1, j)
        i--;
    }
}
function flipLeft(i, j, t) {
    //search if its valid
    let search = 0;
    index = j;
    while (board[i][index - 1] == -t) {
        if (board[i][index - 2] == t) {search = 1}
        index--;
    } 

    //switch
    while (board[i][j - 1] == -t & search) {
        board[i][j - 1] = t;
        color(i, j - 1)
        j--;
    }
}
function flipRight(i, j, t) {
    //search if its valid
    let search = 0;
    index = j;
    while (board[i][index + 1] == -t) {
        if (board[i][index + 2] == t) {search = 1}
        index++;
    } 

    //switch
    while (board[i][j + 1] == -t & search) {
        board[i][j + 1] = t;
        color(i, j + 1)
        j++;
    }
}
function flipDown(i, j, t) {
    //search if its valid
    let search = 0;
    index = i;
    while (board[index + 1][j] == -t) {
        if (board[index + 2][j] == t) {search = 1}
        index++;
    } 

    //switch
    while (board[i + 1][j] == -t & search) {
        board[i + 1][j] = t;
        color(i + 1, j)
        i++;
    }
}

function flipTopLeft(i,j,t) {
    //search if its valid
    let search = 0;
    indexi = i;
    indexj = j;
    while (board[indexi - 1][indexj - 1] == -t) {
        if (board[indexi - 2][indexj - 2] == t) {search = 1}
        indexi--;
        indexj--;
    } 

    //switch
    while (board[i - 1][j - 1] == -t & search) {
        board[i - 1][j - 1] = t;
        color(i - 1, j - 1);
        i--;
        j--;
    }    
}
function flipTopRight(i,j,t) {
    //search if its valid
    let search = 0;
    indexi = i;
    indexj = j;
    while (board[indexi - 1][indexj + 1] == -t) {
        if (board[indexi - 2][indexj + 2] == t) {search = 1}
        indexi--;
        indexj++;
    } 

    //switch
    while (board[i - 1][j + 1] == -t & search) {
        board[i - 1][j + 1] = t;
        color(i - 1, j + 1);
        i--;
        j++;
    }       
}
function flipBotLeft(i,j,t) {
    //search if its valid
    let search = 0;
    indexi = i;
    indexj = j;
    while (board[indexi + 1][indexj - 1] == -t) {
        if (board[indexi + 2][indexj - 2] == t) {search = 1}
        indexi++;
        indexj--;
    } 

    //switch
    while (board[i + 1][j - 1] == -t & search) {
        board[i + 1][j - 1] = t;
        color(i + 1, j - 1);
        i++;
        j--;
    }       
}
function flipBotRight(i,j,t) {
    //search if its valid
    let search = 0;
    indexi = i;
    indexj = j;
    while (board[indexi + 1][indexj + 1] == -t) {
        if (board[indexi + 2][indexj + 2] == t) {search = 1}
        indexi++;
        indexj++;
    } 

    //switch
    while (board[i + 1][j + 1] == -t & search) {
        board[i + 1][j + 1] = t;
        color(i + 1, j + 1);
        i++;
        j++;
    }       
}

function check(i,j,t) {
    if (checkBottom(i,j,t) || checkTop(i,j,t) || checkRight(i,j,t) || checkLeft(i,j,t)) {
        return true;
    }
    if (checkBottomRight(i,j,t) || checkTopRight(i,j,t) || checkBottomLeft(i,j,t) || checkTopLeft(i,j,t)) {
        return true;
    }
    return false;
}

function checkBottom(i,j,t) {
    while (board[i + 1][j] == -t) {
        if (board[i + 2][j] == t) {return true}
        i++;
    } 
}
function checkTop(i,j,t) {
    while (board[i - 1][j] == -t) {
        if (board[i - 2][j] == t) {return true}
        i--;
    } 
}
function checkRight(i,j,t) {
    while (board[i][j + 1] == -t) {
        if (board[i][j + 2] == t) {return true}
        j++;
    }     
}
function checkLeft(i,j,t) {
    while (board[i][j - 1] == -t) {
        if (board[i][j - 2] == t) {return true}
        j--;
    }     
}

function checkBottomRight(i,j,t) {
    while (board[i + 1][j + 1] == -t) {
        if (board[i + 2][j + 2] == t) {return true}
        i++;
        j++;
    } 
}
function checkTopRight(i,j,t) {
    while (board[i - 1][j + 1] == -t) {
        if (board[i - 2][j + 2] == t) {return true}
        i--;
        j++;
    } 
}
function checkBottomLeft(i,j,t) {
    while (board[i + 1][j - 1] == -t) {
        if (board[i + 2][j - 2] == t) {return true}
        i++;
        j--;
    }     
}
function checkTopLeft(i,j,t) {
    while (board[i - 1][j - 1] == -t) {
        if (board[i - 2][j - 2] == t) {return true}
        i--;
        j--;
    }     
}



