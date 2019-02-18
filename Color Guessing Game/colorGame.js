var numOfSqaures = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var mediumBtn = document.querySelector("#mediumBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {

	easyBtn.classList.add("selected");
	mediumBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	numOfSqaures = 3;
	colors =generateRandomColors(numOfSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i=0; i<squares.length; i++) {

		if (colors[i])
			squares[i].style.backgroundColor = colors[i];

		else
			squares[i].style.display = "none";
	}
})

mediumBtn.addEventListener("click", function() {

	mediumBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	numOfSqaures = 6;
	colors =generateRandomColors(numOfSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i=0; i<squares.length; i++) {

		if (colors[i]) {

			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}

		else
			squares[i].style.display = "none";
	}
})

hardBtn.addEventListener("click", function() {

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	mediumBtn.classList.remove("selected");
	numOfSqaures = 9;
	colors =generateRandomColors(numOfSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i=0; i<squares.length; i++) {

		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function() {

	colors = generateRandomColors(numOfSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";

	for (var i=0; i<squares.length; i++)
		squares[i].style.backgroundColor = colors[i];

	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++) {

	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {

		var clickedColor = this.style.backgroundColor;

		if (clickedColor===pickedColor) {

			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}

		else {

			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function generateRandomColors(num) {

	var arr = [];

	for (var i=0; i<num; i++)
		arr.push(randomColor());

	return arr;
}

function randomColor() {

	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function changeColor(color) {

	for (var i=0; i<squares.length; i++)
		squares[i].style.backgroundColor = color;
}

function pickColor() {

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}