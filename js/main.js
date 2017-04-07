
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
var win = {};
var tie;
// TRACKER VARIABLES
var xOrO = "X";
if (currentPlayer !== true) {
	xOrO = "O";
}
// WINNING VARIABLES
win.way1 = 6;
win.way2 = 60;
win.way3 = 600;
win.way4 = 111;
win.way5 = 222;
win.way6 = 333;
win.way7 = 123;
win.way8 = 321;

// ADDING EVENT LISTENERS
a1.addEventListener("click", mark(a1));
a2.addEventListener("click", mark(a2));
a3.addEventListener("click", mark(a3));
b1.addEventListener("click", mark(b1));
b2.addEventListener("click", mark(b2));
b3.addEventListener("click", mark(b3));
c1.addEventListener("click", mark(c1));
c2.addEventListener("click", mark(c2));
c3.addEventListener("click", mark(c3));

// MAIN FUNCTION
function mark(cell) {
	console.log("event");
	cell.innerHTML = xOrO;
		}/*currentPlayer = false;
	if(player1 || player2 == win.way1 || win.way2 || win.way3 || win.way4 || win.way5 || win.way6 || win.way7 || win.way8) {
     // WINNING PLACEHOLDER
    //} else if (){

	//} else {
		
	}
	cell.removeEventListener("mouseout", "");
}*/