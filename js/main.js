


/*DYNAMIC HEADER STATUS UPDATE */

var statusBar = document.getElementById("statusBar");

var text = "";

var currentPlayer = true;

var gameRunning = false;

var gameStatus = "p1Win";



if (gameRunning){
	if(currentPlayer){
		text = "Player 1 Turn";
	} else if (currentPlayer !== true) {
		text = "Player 2 Turn";
	} 
} else if (gameStatus === "tie"){
	text = "Tie";
} else if (gameStatus === "p1Win"){
	text = "Player 1 Win";
} else if (gameStatus === "p2Win"){
	text = "Player 2 Wn";
}


statusBar.innerHTML = "<h2> " + text + "</h2>";