
const inputs = document.getElementById('inputs');
const inputDisplay = document.getElementById('eqn');
const answerDisplay = document.getElementById('numDis');

const clearBtn = document.querySelector('#clr');
const deleteBtn = document.querySelector('#del');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');
const equal = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');

clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', del);
equal.addEventListener('click', () => equate())

numbers.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operators.forEach((button) => 
    button.addEventListener('click', () => operate(button.textContent))
);

function appendNumber(number) {
    inputDisplay.textContent += number;
}

function del () {
    inputDisplay.textContent = inputDisplay.textContent.slice(0,-1);
}

function equate() {
    if(inputDisplay.textContent.includes('÷') || inputDisplay.textContent.includes('+') || inputDisplay.textContent.includes('-') || inputDisplay.textContent.includes('x')) {
        operate()
    } else return
}

function operate(operator, a, b) {
        if(inputDisplay.textContent.includes('+')) {
            const inputArray = inputDisplay.textContent.split('+');
            let a = parseFloat(inputArray[0]).toFixed(2);
            let b = parseFloat(inputArray[1]).toFixed(2)
            answerDisplay.textContent = addition(a, b);
            if(operator === undefined) {
                inputDisplay.textContent = addition(a, b);        
            }
            else {
            inputDisplay.textContent = addition(a, b) + ` ${operator} `;
            }
        } else if (inputDisplay.textContent.includes('-')) {
            const inputArray = inputDisplay.textContent.split('-');
            let a = parseFloat(inputArray[0]).toFixed(2);
            let b = parseFloat(inputArray[1]).toFixed(2)
            answerDisplay.textContent = subtraction(a, b);
            if(operator === undefined) {
                inputDisplay.textContent = subtraction(a, b);        
            }
            else {
                inputDisplay.textContent = subtraction(a, b) + ` ${operator} `;
            }
        } else if (inputDisplay.textContent.includes('x')) {
            const inputArray = inputDisplay.textContent.split('x');
            let a = parseFloat(inputArray[0]).toFixed(2);
            let b = parseFloat(inputArray[1]).toFixed(2)
            answerDisplay.textContent = multiplication(a, b);
            if(operator === undefined) {
                inputDisplay.textContent = multiplication(a, b);        
            }
            else {
                inputDisplay.textContent = multiplication(a, b) + ` ${operator} `;
            }
        } else if (inputDisplay.textContent.includes('÷')) {
            const inputArray = inputDisplay.textContent.split('÷');
            let a = parseFloat(inputArray[0]).toFixed(2);
            let b = parseFloat(inputArray[1]).toFixed(2);
            if(a === 0 || b === 0) {
                alert(`Can't divide 0`)
                return
            }
            answerDisplay.textContent = division(a, b);
            if(operator === undefined) {
                inputDisplay.textContent = division(a, b);        
            }
            else {
                inputDisplay.textContent = division(a, b) + ` ${operator} `;
            }
        } else {
            inputDisplay.textContent += ` ${operator} `;
        }
}
 function clear() {
    answerDisplay.textContent = '';
    inputDisplay.textContent = '';
 }


function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a,b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}