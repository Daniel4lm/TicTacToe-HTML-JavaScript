
let click = 'X';
let turnMark = 0, turnCounter = 0;
let boardArray = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]];

let markColor;

let d_array = document.querySelectorAll(".d");

function mouseClick(e, x, y) {

    if (e.innerText == '_') {
        boardArray[x][y] = click;
        turnCounter += 1;
        e.innerHTML = (click == 'X') ? click : "<i class='far fa-circle' style=font-size:35px'></i>";
        markColor = (click == 'X') ? "#35d259" : "#f4ba0b";
        e.style.color = "#343a40";

        document.getElementsByClassName("turn")[0].innerText = "This turn: " + click;

        if (checkXO()) {
            document.getElementsByClassName("turn")[0].innerText = click + " has won this time!";
            document.getElementsByClassName("turn")[0].style.color = "#0ed145";

            d_array.forEach(element => {
                element.innerHTML = (element.innerHTML != '_') ? element.innerHTML : "/";
            });

            document.querySelector()
        } else if(turnCounter == 9) {
            document.getElementsByClassName("turn")[0].innerText = "No one won this time!";
            document.getElementsByClassName("turn")[0].style.color = "#ed3940";
        }
        
        else {
            click = (turnMark == 1) ? 'X' : 'O';
            turnMark = (turnMark == 0) ? 1 : 0;
            document.getElementsByClassName("turn")[0].innerText = "This turn: " + click;
        }
    }
}

function checkXO() {

    if (boardArray[0][0] == click && boardArray[0][1] == click && boardArray[0][2] == click) {
        d_array[0].style.backgroundColor = markColor;
        d_array[1].style.backgroundColor = markColor;
        d_array[2].style.backgroundColor = markColor;
        return true;
    } else if (boardArray[1][0] == click && boardArray[1][1] == click && boardArray[1][2] == click) {
        d_array[3].style.backgroundColor = markColor;
        d_array[4].style.backgroundColor = markColor;
        d_array[5].style.backgroundColor = markColor;
        return true;
    } else if (boardArray[2][0] == click && boardArray[2][1] == click && boardArray[2][2] == click) {
        d_array[6].style.backgroundColor = markColor;
        d_array[7].style.backgroundColor = markColor;
        d_array[8].style.backgroundColor = markColor;
        return true;
    }

    if (boardArray[0][0] == click && boardArray[1][0] == click && boardArray[2][0] == click) {
        d_array[0].style.backgroundColor = markColor;
        d_array[3].style.backgroundColor = markColor;
        d_array[6].style.backgroundColor = markColor;
        return true;
    } else if (boardArray[0][1] == click && boardArray[1][1] == click && boardArray[2][1] == click) {
        d_array[1].style.backgroundColor = markColor;
        d_array[4].style.backgroundColor = markColor;
        d_array[7].style.backgroundColor = markColor;
        return true;
    } else if (boardArray[0][2] == click && boardArray[1][2] == click && boardArray[2][2] == click) {
        d_array[2].style.backgroundColor = markColor;
        d_array[5].style.backgroundColor = markColor;
        d_array[8].style.backgroundColor = markColor;
        return true;
    }

    if (boardArray[0][0] == click && boardArray[1][1] == click && boardArray[2][2] == click) {
        d_array[0].style.backgroundColor = markColor;
        d_array[4].style.backgroundColor = markColor;
        d_array[8].style.backgroundColor = markColor;
        return true;
    } else if (boardArray[0][2] == click && boardArray[1][1] == click && boardArray[2][0] == click) {
        d_array[2].style.backgroundColor = markColor;
        d_array[4].style.backgroundColor = markColor;
        d_array[6].style.backgroundColor = markColor;
        return true;
    }
    return false;
}

