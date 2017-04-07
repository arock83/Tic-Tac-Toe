//Declaring cell variables
var a1 = document.getElementById("cell1_1");
var a2 = document.getElementById("cell1_2");
var a3 = document.getElementById("cell1_3");
var b1 = document.getElementById("cell2_1");
var b2 = document.getElementById("cell2_2");
var b3 = document.getElementById("cell2_3");
var c1 = document.getElementById("cell3_1");
var c2 = document.getElementById("cell3_2");
var c3 = document.getElementById("cell3_3");



var statusBar = document.getElementById("statusBar");
var text = "";

var currentPlayer = true;

var gameRunning = true;
var gameStatus = "";
var xOrO = "x";
changeHeader();

function changeHeader() {
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
			text = "Player 2 Win";
		}
		statusBar.innerHTML = "<h2> " + text + "</h2>";
}


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



function mark(cell){
	cell.target.innerHTML = xOrO
	console.log(cell);
	currentPlayer = !currentPlayer;

	if (currentPlayer){
		xOrO = "x"; 
	} else {
		xOrO = "o";
	}

	whoWon();
	changeHeader();

	cell.target.removeEventListener(cell.type, arguments.callee);

}



				

 function whoWon(){
	if (cell1_1.innerHTML === "x" && cell1_2.innerHTML === "x" && cell1_3.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell1_1.innerHTML === "o" && cell1_2.innerHTML === "o" && cell1_3.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 

	if (cell2_1.innerHTML === "x" && cell2_2.innerHTML === "x" && cell2_3.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell2_1.innerHTML === "o" && cell2_2.innerHTML === "o" && cell2_3.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 

	if (cell3_1.innerHTML === "x" && cell3_2.innerHTML === "x" && cell3_3.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell3_1.innerHTML === "o" && cell3_2.innerHTML === "o" && cell3_3.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 

	if (cell1_1.innerHTML === "x" && cell2_2.innerHTML === "x" && cell3_3.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell1_1.innerHTML === "o" && cell2_2.innerHTML === "o" && cell3_3.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 
	if (cell3_1.innerHTML === "x" && cell2_2.innerHTML === "x" && cell1_3.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell3_1.innerHTML === "o" && cell2_2.innerHTML === "o" && cell1_3.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 
	if (cell1_1.innerHTML === "x" && cell2_1.innerHTML === "x" && cell3_1.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell1_1.innerHTML === "o" && cell2_1.innerHTML === "o" && cell3_1.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 
	if (cell1_2.innerHTML === "x" && cell2_2.innerHTML === "x" && cell3_2.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell1_2.innerHTML === "o" && cell2_2.innerHTML === "o" && cell3_2.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 
	if (cell1_3.innerHTML === "x" && cell2_3.innerHTML === "x" && cell3_3.innerHTML === "x"){
			gameRunning = false;
			gameStatus = "p1Win";
	} else if (cell1_3.innerHTML === "o" && cell2_3.innerHTML === "o" && cell3_3.innerHTML === "o"){
			gameRunning = false;
			gameStatus = "p2Win";
	} 
	if (a1.innerHTML.length > 1 &&
    a2.innerHTML.length > 1 &&
    a3.innerHTML.length > 1 &&
    b1.innerHTML.length > 1 &&
    b2.innerHTML.length > 1 &&
    b3.innerHTML.length > 1 &&
    c1.innerHTML.length > 1 &&
    c2.innerHTML.length > 1 &&
    c3.innerHTML.length > 1) {

    gameStatus = "Tie";
    gameRunning = false;
}
} 




