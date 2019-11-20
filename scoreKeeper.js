var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winnigScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	p1Display.textContent = p1Score;
	if(p1Score === winningScore){
		p1Display.classList.add("winner");
		gameOver = true;
	}	
	}
	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
	p2Display.textContent = p2Score;
	if(p2Score === winningScore){
		p2Display.classList.add("winner");
		gameOver = true;
	}
}	
});


resetButton.addEventListener("click", function(){
    reset();
});

 numInput.addEventListener("change", function(){
 	winnigScoreDisplay.textContent = this.value;
 	winningScore = Number(this.value);
 	reset();
 });

 function reset(){
 	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
 }