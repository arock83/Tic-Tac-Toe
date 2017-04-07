//Declaring cell variables

var cell1_1 = document.getElementById("cell1_1");
var cell1_2 = document.getElementById("cell1_2");
var cell1_3 = document.getElementById("cell1_3");

var cell2_1 = document.getElementById("cell2_1");
var cell2_2 = document.getElementById("cell2_2");
var cell2_3 = document.getElementById("cell2_3");

var cell3_1 = document.getElementById("cell3_1");
var cell3_2 = document.getElementById("cell3_2");
var cell3_3 = document.getElementById("cell3_3");

var statusBar = document.getElementById("statusBar");
var text = "";

var currentPlayer = true;
var p1Score;
var p2Score;

var gameRunning = true;
var gameStatus = "p1Win";
var xOrO =""

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

changeHeader();



//Adding X and O to <td> elements


cell1_1.addEventListener("click", mark);
cell1_2.addEventListener("click", mark);
cell1_3.addEventListener("click", mark);

cell2_1.addEventListener("click", mark);
cell2_2.addEventListener("click", mark);
cell2_3.addEventListener("click", mark);

cell3_1.addEventListener("click", mark);
cell3_2.addEventListener("click", mark);
cell3_3.addEventListener("click", mark);




function mark(cell){
	cell.target.innerHTML = xOrO

	if (currentPlayer){
		xOrO = "x";
		p1Score += cell.target.score 
	} else {
		xOrO = "o";
		p2Score += cell.target.score
	}
	currentPlayer = !currentPlayer;
	whoWon();
	changeHeader();


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
} 
			
			








