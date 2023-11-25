function add(num1, num2) {
	return num1 + num2
}
function subtract(num1, num2) {
	return num1 - num2
}
function multiply(num1, num2) {
	return num1 * num2
}
function divide(num1, num2) {
	return num1 / num2
}
let num1 = "";
let num2 = "";
let operator = "";
let result = 0;
function operate(num1, operator, num2) {
	if (operator === "+") {
		return add(num1, num2)
	} else if (operater === "-") {
		return subtract(num1, num2)
	} else if (operator === "*") {
		return multiply(num1, num2) 
	} else if (operator === "/") {
		return num2 !== 0 ? divide(num1, num2) : "divition error"
	}
}
const body = document.querySelector("body");
const numbersDiv = document.createElement("div");
numbersDiv.id = "numberSection";
body.appendChild(numbersDiv);
for (let i = 0; i <= 9; i ++) {
	const numberButton = document.createElement("button");
	numberButton.textContent = i;
	numbersDiv.appendChild(numberButton);
};
