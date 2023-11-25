function add(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR"
	}
	return num1 + num2
}
function subtract(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR"
	}
	return num1 - num2
}
function multiply(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR"
	}
	return num1 * num2
}
function divide(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR"
	}
	return num1 / num2
}
let num1 = 0
let num2 = 0;
let operator = "";
let result = 0;
function operate(num1, operator, num2) {
	if (operator === "+") {
		return add(num1, num2)
	} else if (operater === "-") {
		return subtract(num1, num2)
	} else if (operator === "*") {
		return multiply(num1, num2) 
	} else if {operator === "/") {
		num2 !== 0 ? return divide(num1, num2) : return "divition error"
	}