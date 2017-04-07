
/*DYNAMIC HEADER STATUS UPDATE */

var statusBar = document.getElementById("statusBar");

var text = "cool";

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


//statusBar.innerHTML = "<h2> " + text + "</h2>";

// PULLING CELL INFO.
var a1 = document.getElementById("cell1_1");
var a2 = document.getElementById("cell1_2");
var a3 = document.getElementById("cell1_3");
var b1 = document.getElementById("cell2_1");
var b2 = document.getElementById("cell2_2");
var b3 = document.getElementById("cell2_3");
var c1 = document.getElementById("cell3_1");
var c2 = document.getElementById("cell3_2");
var c3 = document.getElementById("cell3_3");
// PLAYER VARIABLES
var player1;
var player2;
var currentPlayer = true;
// WIN/TIE VARIABLES
var win;
var tie;
// TRACKER VARIABLES
var xOrO = "X";
// WINNING VARIABLES

// ADDING EVENT LISTENERS
a1.addEventListener("mousedown", mark);
a2.addEventListener("mousedown", mark);
a3.addEventListener("mousedown", mark);
b1.addEventListener("mousedown", mark);
b2.addEventListener("mousedown", mark);
b3.addEventListener("mousedown", mark);
c1.addEventListener("mousedown", mark);
c2.addEventListener("mousedown", mark);
c3.addEventListener("mousedown", mark);

// MAIN FUNCTION
function mark(cell) {
	console.log(cell);
	cell.target.innerHTML = xOrO;
	if (currentPlayer) {
		xOrO = "O";
	} else {
		xOrO = "X";
	}
	currentPlayer = !currentPlayer;
	// REMOVE EVENT LISTENER
	cell.target.removeEventListener(cell.type, arguments.callee);
}