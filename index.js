let num1 = 0;
let num2 = 0;
let home = document.getElementById("score");
let guest = document.getElementById("score2");
let currentScore1 = document.getElementById("first");
let currentScore2 = document.getElementById("second");
let currentScore3 = document.getElementById("third");
let currentScore4 = document.getElementById("fourth");

document.getElementById("score").innerText = num1;
document.getElementById("score2").innerText = num2;

function increment1() {
	num1 += 1;
	home.textContent = num1;
}
function increment2() {
	num1 += 2;
	home.textContent = num1;
}
function increment3() {
	num1 += 3;
	home.textContent = num1;
}
function increase1() {
	num2 += 1;
	guest.textContent = num2;
}
function increase2() {
	num2 += 2;
	guest.textContent = num2;
}
function increase3() {
	num2 += 3;
	guest.textContent = num2;
}

function saveScores1() {
	currentScore1.textContent = num1 + " - " + num2;
}

function saveScores2() {
	currentScore2.textContent = num1 + " - " + num2;
}

function saveScores3() {
	currentScore3.textContent = num1 + " - " + num2;
}

function saveScores4() {
	currentScore4.textContent = num1 + " - " + num2;
}
