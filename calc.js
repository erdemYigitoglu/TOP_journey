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
	} else if {operator === "/") {
		num2 !== 0 ? return divide(num1, num2) : return "divition error"
	}