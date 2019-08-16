var numOfSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDispaly = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


setUpModeButtons();
setUpSquares();
reset();

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
    resetButton.addEventListener("click", function () {
        reset();
    });
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                reset.textContent = "Play Again";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#323232";
                messageDisplay.textContent = "Try Again";
            }    
        });
    }
}

function reset() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDispaly.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++){
        if (i < numOfSquares) {
            squares[i].style.backgroundColor = color;
        }    
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr[i] = randomColor();
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}