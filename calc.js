function add(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR"
	}
	return num1 + num2
}
add(5, 4);