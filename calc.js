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
	} else if (operator === "-") {
		return subtract(num1, num2)
	} else if (operator === "*") {
		return multiply(num1, num2) 
	} else if (operator === "/") {
		return num2 !== 0 ? divide(num1, num2) : "division error"
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
clearButton.addEventListener("click", () => {
	display.value = "";
num1= "";
num2= ""
operator = "";
})
body.appendChild(displayDiv);
const numbersDiv = document.createElement("div");
numbersDiv.id = "numberSection";
body.appendChild(numbersDiv);
numbersDiv.addEventListener("click", (e) => storeNumber(e))
function storeNumber(e) {
	if (operator === "") {
		num1 += e.target.textContent;
} else {
		num2 += e.target.textContent;
		}
		display.value += e.target.textContent;
}
for (let i = 0; i <= 9; i ++) {
	const numberButton = document.createElement("button");
	numberButton.textContent = i;
	numbersDiv.appendChild(numberButton);
	}
function calculate(e) {
	if ((num1=== "") || (num2 === "")) {
		operator = e.target.textContent;
		display.value += e.target.textContent;
	} else {
		num1 = operate(Number(num1), operator, Number(num2));
		num2 ="";
		display.value += e.target.textContent;
		operator = e.target.textContent
	}}
const operatorsDiv = document.createElement("div");
operatorsDiv.id = "operatorsDiv";
operatorsDiv.addEventListener("click", (e) => {
	if (e.target.textContent === "=") {
		num1 = operate(Number(num1), operator, Number(num2));
		display.value = num1;
		num2= "";
	} else {
		calculate(e)
	}});
const plus = document.createElement("button");
plus.textContent = "+";
operatorsDiv.appendChild(plus);
const minus = document.createElement("button");
minus.textContent = "-";
operatorsDiv.appendChild(minus);
const multiplication = document.createElement("button");
multiplication.textContent = "*";
operatorsDiv.appendChild(multiplication);
const division = document.createElement("button");
division.textContent = "/";
operatorsDiv.appendChild(division);
const equality = document.createElement("button");
equality.textContent = "=";
operatorsDiv.appendChild(equality);
body.appendChild(operatorsDiv);