let boxes = document.querySelectorAll(".boxes");
let matrix = [0,0,0,0,0,0,0,0,0]
let turn = 0; //0 is O

for (i = 0; i < 9; i++) {
    boxes[i].addEventListener("click", function() {
        if (turn == 0 && (this.innerHTML != "X" || this.innerHTML != "O")) {
            turn = 1;
            this.innerHTML = "O";
            this.style.backgroundColor = "black"
            this.style.color = "white"
            matrix[i] = -1;
        }
        else if (turn == 1 && (this.innerHTML != "X" || this.innerHTML != "O")) {
            turn = 0;
            this.innerHTML = "X";
            this.style.backgroundColor = "black"
            this.style.color = "white"
            matrix[i] = 1;
        }
    })
}

function checkWinX () {
    //rows
    if (matrix[0]+matrix[3]+matrix[6] == -3) {

    }
}

