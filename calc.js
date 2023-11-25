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
const displayDiv = document.createElement("div");
displayDiv.id = "displaySection";
const display = document.createElement("input");
display.readOnly = true;
displayDiv.appendChild(display);
const deleteButton = document.createElement("button");
deleteButton.textContent= "delete";
displayDiv.appendChild(deleteButton);
const clearButton = document.createElement("button");
clearButton.textContent= "clear";
displayDiv.appendChild(clearButton);
clearButton.addEventListener("click", () => display.value = "");
body.appendChild(displayDiv);
const numbersDiv = document.createElement("div");
numbersDiv.id = "numberSection";
body.appendChild(numbersDiv);
function storeNumber(e) {
	if (num1 === "") {
		num1 += e.target.textContent;
		display.value += num1;
	} else {
		num2 += e.target.textContent;
		display.value += num2
	}
}
for (let i = 0; i <= 9; i ++) {
	const numberButton = document.createElement("button");
	numberButton.textContent = i;
	numbersDiv.appendChild(numberButton);
	numberButton.addEventListener("click", (e) => storeNumber(e))
}
function calculate() {
	operator = e.target.textContent;
	display.value += e.target.textContent;
	if (num2 !== "") {
		num1 = operate(Number(num1), operator, Number(num2));
		num2 = "" 
	}
}
