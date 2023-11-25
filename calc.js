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
