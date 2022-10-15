
function newGame () {
    
}

function userChoice() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }

}

function computerCoice() {
      // Creates one random numbers between 0 and 2
      let num1 = Math.floor(Math.random() * 3);
      console.log(num1)
}

computerCoice()

function gameResult() {

}

function gameScore() {

}

function incrementScore() {

}

function gameOver() {

}

function gameStrategi() {

}