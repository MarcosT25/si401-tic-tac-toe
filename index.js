var count = 0;
var win = 0;
var player = 0;
var score = [0, 0]

var table = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var squares = document.getElementsByTagName("canvas");

function myFunc() {
    var ctx = this.getContext("2d");
    if (table[this.id] == 0 && !win) {
        if (count%2) {
            drawO(ctx);
        }
        else {
            drawX(ctx);
        }
        table[this.id] = count % 2 + 1
        console.log(table)
        count++
    }
    checkResult();
}

for (var i = 0; i < squares.length; i++) {
    squares[i].width = 150;
    squares[i].height = 150;
    squares[i].addEventListener("click", myFunc, false);
}

document.getElementById("reset").addEventListener("click", () => {
    player++;
    count = player%2;
    win = 0;
    document.getElementById("champion").innerHTML = "";
    for (var i = 0; i < squares.length; i++) {
        ctx = squares[i].getContext("2d");
        drawBlank(ctx);
        table[i] = 0;
    }
});

function checkResult() {
    for (let i = 0; i < 9; i+=3) {
        if (table[i] == table[i + 1] && table[i] == table[i + 2] && table[i] != 0) {
            win = 1;
            document.getElementById("champion").innerHTML = "O jogador " + table[i] + " ganhou";
        }
    }
    for (let i = 0; i < 3; i++) {
        if (table[i] == table[i + 3] && table[i] == table[i + 6] && table[i] != 0) {
            win = 1;
            document.getElementById("champion").innerHTML = "O jogador " + table[i] + " ganhou";
        }
    }
    if (table[0] == table[4] && table[0] == table[8] && table[0] != 0) {
        win = 1;
        document.getElementById("champion").innerHTML = "O jogador " + table[0] + " ganhou";
    }
    if (table[2] == table[4] && table[2] == table[6] && table[2] != 0) {
        win = 1;
        document.getElementById("champion").innerHTML = "O jogador " + table[2] + " ganhou";
    }
    let draw = 1;
    for (let i = 0; i < 8; i++) {
        if (table[i] == 0) {
            draw = 0;
        }
    }
    if (!win && draw) {
        document.getElementById("champion").innerHTML = "Empatou"
    }
}

function drawX(ctx) {
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(120, 120);
    ctx.moveTo(30, 120);
    ctx.lineTo(120, 30);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.stroke();
}
function drawO(ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, 2*Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke();
}
function drawBlank(ctx) {
    ctx.beginPath();
    ctx.clearRect(0, 0, 150, 150);
}
