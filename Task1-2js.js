let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
  input += value;
  display.textContent = input;
}

function clearDisplay() {
  input = '';
  display.textContent = '0';
}

function operate(operator) {
  if (input !== '' && !input.endsWith(operator)) {
    input += operator;
    display.textContent = input;
  }
}

function calculate() {
  try {
    input = eval(input).toString();
    display.textContent = input;
  } catch (error) {
    display.textContent = 'Error';
  }
}
