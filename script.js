const display = document.getElementById('display');

let currentResult = 0;
let currentOperator = "";

function appendToDisplay(input) {
  if (isOperator(input)) {
    if (display.value !== "") {
      if (currentOperator !== "") {
        calculate();
      } else {
        currentResult = parseFloat(display.value);
      }
    }
    currentOperator = input;
    display.value = currentResult + " " + currentOperator + " ";
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = '';
  currentResult = 0;
  currentOperator = '';
}

function calculate() {
  const expression = display.value.split(' ');
  let num1 = currentResult;
  let num2 = parseFloat(expression[2]);

  if (currentOperator === '+') {
    currentResult = num1 + num2;
  } else if (currentOperator === '-') {
    currentResult = num1 - num2;
  } else if (currentOperator === '*') {
    currentResult = num1 * num2;
  } else if (currentOperator === '/') {
    currentResult = num1 / num2;
  }


  display.value = currentResult;
  currentOperator = '';
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

