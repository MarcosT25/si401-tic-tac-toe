// starter variables
var count = 0;
var win = 0;
var player = 0;
var score = [0, 0];
var table = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");

//page first load
document.getElementById("info").innerHTML = "Vez de jogar: " + player1;
document.getElementById("info").style.color = "blue";
document.getElementById("score").innerHTML = player1 + " " + score[0] + " x " + score[1] + " " + player2;

var squares = document.getElementsByTagName("canvas");

//event listeners
for (var i = 0; i < squares.length; i++) {
    squares[i].width = 120;
    squares[i].height = 120;
    squares[i].addEventListener("click", draw, false);
}

document.getElementById("reset").addEventListener("click", reset);

//functions
function draw() {
    var ctx = this.getContext("2d");
    if (table[this.id] == 0 && !win) {
        if (count%2) {
            drawO(ctx);
            document.getElementById("info").innerHTML = "Vez de jogar: " + player1;
            document.getElementById("info").style.color = "blue";
        }
        else {
            drawX(ctx);
            document.getElementById("info").innerHTML = "Vez de jogar: " + player2;
            document.getElementById("info").style.color = "red";
        }
        table[this.id] = count % 2 + 1
        console.log(table)
        count++
    }
    checkResult();
}

function reset() {
    player++;
    count = player%2;
    win = 0;
    if (count%2 == 1) {
        document.getElementById("info").innerHTML = "Vez de jogar: " + player2;
        document.getElementById("info").style.color = "red";
    }
    else {
        document.getElementById("info").innerHTML = "Vez de jogar: " + player1;
        document.getElementById("info").style.color = "blue";
    }
    for (var i = 0; i < squares.length; i++) {
        ctx = squares[i].getContext("2d");
        drawBlank(ctx);
        table[i] = 0;
    }
}

function checkResult() {
    for (let i = 0; i < 9; i+=3) {
        if (table[i] == table[i + 1] && table[i] == table[i + 2] && table[i] != 0 && !win) {
            win = 1;
            if (table[i] == 1) {
                document.getElementById("info").innerHTML = player1 + " ganhou!";
                document.getElementById("info").style.color = "blue";
                score[0]++;
            }
            else {
                document.getElementById("info").innerHTML = player2 + " ganhou!";
                document.getElementById("info").style.color = "red";
                score[1]++;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if (table[i] == table[i + 3] && table[i] == table[i + 6] && table[i] != 0 && !win) {
            win = 1;
            if (table[i] == 1) {
                document.getElementById("info").innerHTML = player1 + " ganhou!";
                document.getElementById("info").style.color = "blue";
                score[0]++;
            }
            else {
                document.getElementById("info").innerHTML = player2 + " ganhou!";
                document.getElementById("info").style.color = "red";
                score[1]++;
            }
        }
    }
    if (table[0] == table[4] && table[0] == table[8] && table[0] !=  0 && !win) {
        win = 1;
        if (table[0] == 1) {
            document.getElementById("info").innerHTML = player1 + " ganhou!";
            document.getElementById("info").style.color = "blue";
            score[0]++;
        }
        else {
            document.getElementById("info").innerHTML = player2 + " ganhou!";
            document.getElementById("info").style.color = "red";
            score[1]++;
        }
    }
    if (table[2] == table[4] && table[2] == table[6] && table[2] != 0 && !win) {
        win = 1;
        if (table[2] == 1) {
            document.getElementById("info").innerHTML = player1 + " ganhou!";
            document.getElementById("info").style.color = "blue";
            score[0]++;
        }
        else {
            document.getElementById("info").innerHTML = player2 + " ganhou!";
            document.getElementById("info").style.color = "red";
            score[1]++;
        }
    }
    let draw = 1;
    for (let i = 0; i < 8; i++) {
        if (table[i] == 0) {
            draw = 0;
        }
    }
    if (!win && draw) {
        document.getElementById("info").innerHTML = "Empatou"
        document.getElementById("info").style.color = "black";
    }
    document.getElementById("score").innerHTML = player1 + " " + score[0] + " x " + score[1] + " " + player2;
}

function drawX(ctx) {
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(100, 100);
    ctx.moveTo(20, 100);
    ctx.lineTo(100, 20);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.stroke();
}
function drawO(ctx) {
    ctx.beginPath();
    ctx.arc(60, 60, 45, 0, 2*Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
function drawBlank(ctx) {
    ctx.beginPath();
    ctx.clearRect(0, 0, 150, 150);
}