
const inputs = document.getElementById('inputs');
const inputDisplay = document.getElementById('eqn');
const answerDisplay = document.getElementById('numDis');

// Button identifiers
const clearBtn = document.querySelector('#clr');
const deleteBtn = document.querySelector('#del');
const decimal = document.querySelector('#decimal');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');


// Button functionality
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', del);
equal.addEventListener('click', () => equate())

numbers.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operators.forEach((button) => 
    button.addEventListener('click', () => operate(button.textContent))
);


// Place numbers on display
function appendNumber(number) {
    inputDisplay.textContent += number;
}

// Delete last number/operator
function del () {
    inputDisplay.textContent = inputDisplay.textContent.slice(0,-1);
}

// When equals button is clicked determine if able to operate
function equate() {
    if(inputDisplay.textContent.includes('÷') || inputDisplay.textContent.includes('+') || inputDisplay.textContent.includes('-') || inputDisplay.textContent.includes('x')) {
        operate()
    } else return
}

// takes operator and both numbers to obtain an answer
function operate(operator) {
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
            if(b === 0) {
                alert(`Can't divide 0`)
                return
            }
            answerDisplay.textContent = (Math.round(division(a, b)*1000)/1000);
            if(operator === undefined) {
                inputDisplay.textContent = (Math.round(division(a, b)*1000)/1000);        
            }
            // if equals operator is clicked
            else {
                inputDisplay.textContent = (Math.round(division(a, b)*1000)/1000) + ` ${operator} `;
            }
        // if no operator was used yet append to end of display
        } else {
            inputDisplay.textContent += ` ${operator} `;
        }
}

//clear displays
 function clear() {
    answerDisplay.textContent = '';
    inputDisplay.textContent = '';
 }

// Operations
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



// Keyboard Support
window.addEventListener('keydown', keyboardInput)

function keyboardInput(e) {
    if (e.key >= 0 && e.key <=9) appendNumber(e.key);
    if (e.key === '*' || e.key === 'x' || e.key === '/' || e.key === '+' || e.key === '-') operate(convertToOperator(e.key));
    if (e.key === '=' || e.key === 'Enter') equate();
    if (e.key === 'Backspace' || e.key === 'Delete') del();
    if (e.key === 'Escape') clear();
    if (e.key === '.') appendNumber(e.key);
}

function convertToOperator(operator) {
    if(operator === '*' || operator === 'x') return 'x';
    if(operator === '/') return '/';
    if(operator === '+') return '+'
    if(operator === '-') return '-'
}