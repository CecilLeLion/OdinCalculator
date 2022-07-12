
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
            let a = parseFloat(inputArray[0]);
            let b = parseFloat(inputArray[1]);
            answerDisplay.textContent = (Math.round(addition(a, b)*1000)/1000);
            if(operator === undefined) {
                inputDisplay.textContent = (Math.round(addition(a, b)*1000)/1000);        
            }
            else {
            inputDisplay.textContent = (Math.round(addition(a, b)*1000)/1000) + ` ${operator} `;
            }
        } else if (inputDisplay.textContent.includes('-')) {
            const inputArray = inputDisplay.textContent.split('-');
            let a = parseFloat(inputArray[0]);
            let b = parseFloat(inputArray[1]);
            answerDisplay.textContent = (Math.round(subtraction(a, b)*1000)/1000);
            if(operator === undefined) {
                inputDisplay.textContent = (Math.round(subtraction(a, b)*1000)/1000);        
            }
            else {
                inputDisplay.textContent = (Math.round(subtraction(a, b)*1000)/1000) + ` ${operator} `;
            }
        } else if (inputDisplay.textContent.includes('x')) {
            const inputArray = inputDisplay.textContent.split('x');
            let a = parseFloat(inputArray[0]);
            let b = parseFloat(inputArray[1]);
            answerDisplay.textContent = (Math.round(multiplication(a, b)*1000)/1000);
            if(operator === undefined) {
                inputDisplay.textContent = (Math.round(multiplication(a, b)*1000)/1000);        
            }
            else {
                inputDisplay.textContent = (Math.round(multiplication(a, b)*1000)/1000) + ` ${operator} `;
            }
        } else if (inputDisplay.textContent.includes('÷')) {
            const inputArray = inputDisplay.textContent.split('÷');
            let a = parseFloat(inputArray[0]);
            let b = parseFloat(inputArray[1]);
            if(a === 0 || b === 0) {
                alert(`Can't divide 0`)
                return
            }
            answerDisplay.textContent = (Math.round(division(a, b)*1000)/1000);
            if(operator === undefined) {
                inputDisplay.textContent = (Math.round(division(a, b)*1000)/1000);        
            }
            else {
                inputDisplay.textContent = (Math.round(division(a, b)*1000)/1000) + ` ${operator} `;
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