function getPlayers() {
    var player1 = document.forms["myForm"]["player1"].value;
    var player2 = document.forms["myForm"]["player2"].value;
    if (player1 != "" && player2 != "") {
        localStorage.setItem("player1", player1);
        localStorage.setItem("player2", player2);
        return true;
    }
    else {
        alert("Insira valores válidos para nome");
        return false;
    }
}