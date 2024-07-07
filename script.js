const display = document.getElementById('display');

let currentResult = 0;
let currentOperator = "";

let mySound = new Audio('buttonpress.mp3');

function appendToDisplay(input) {
  mySound.play();
  if (isOperator(input)) {
    if (display.value !== "") {
      if (currentOperator !== "") {
        calculate();
      } else {
        currentResult = parseFloat(display.value.replace(/,/g, ''));
      }
    }
    currentOperator = input;
    display.value = formatNumber(currentResult) + " " + currentOperator + " ";
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
  let num2 = parseFloat(expression[2].replace(/,/g, ''));

  if (currentOperator === '+') {
    currentResult = num1 + num2;
  } else if (currentOperator === '-') {
    currentResult = num1 - num2;
  } else if (currentOperator === '*') {
    currentResult = num1 * num2;
  } else if (currentOperator === '/') {
    currentResult = num1 / num2;
  }

  display.value = formatNumber(currentResult);
  currentOperator = '';
}

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}