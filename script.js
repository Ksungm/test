const input = document.querySelector('#input');
const clearButton = document.querySelector('#clear');
const calculateButton = document.querySelector('#calculate');
const decimalButton = document.querySelector('#decimal');
const operatorButtons = document.querySelectorAll('.operator');
const numberButtons = document.querySelectorAll('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero');

let currentNumber = '';
let firstNumber = '';
let operator = '';
let result = '';

function add(a, b) {
	return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
	return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
	return
function divide(a, b) {
	return parseFloat(a) / parseFloat(b);
}

function operate(operator, a, b) {
	switch (operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case '*':
			return multiply(a, b);
		case '/':
			if (b === 0) {
				return 'Error';
			} else {
				return divide(a, b);
			}
		default:
			return 'Error';
	}
}

function clear() {
	currentNumber = '';
	firstNumber = '';
	operator = '';
	result = '';
	input.value = '';
}

function handleNumberClick(event) {
	currentNumber += event.target.textContent;
	input.value = currentNumber;
}

function handleOperatorClick(event) {
	if (firstNumber === '') {
		firstNumber = currentNumber;
	} else if (currentNumber !== '') {
		result = operate(operator, firstNumber, currentNumber);
		firstNumber = result;
		input.value = result;
	}
	operator = event.target.textContent;
	currentNumber = '';
}

function handleDecimalClick() {
	if (!currentNumber.includes('.')) {
		currentNumber += '.';
		input.value = currentNumber;
	}
}

function handleCalculateClick() {
	if (currentNumber !== '') {
		result = operate(operator, firstNumber, currentNumber);
		input.value = result;
		currentNumber = '';
		firstNumber = result;
		operator = '';
	}
}

clearButton.addEventListener('click', clear);

decimalButton.addEventListener('click', handleDecimalClick);

calculateButton.addEventListener('click', handleCalculateClick);

numberButtons.forEach(button => {
	button.addEventListener('click', handleNumberClick);
});

operatorButtons.forEach(button => {
	button.addEventListener('click', handleOperatorClick);
});
