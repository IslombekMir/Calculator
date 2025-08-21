function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return  a * b;
}

function divide(a, b) {
    return a / b;
}


//operands
let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let callFunction;

//nodes
const keys = document.querySelector('#keys');
const board = document.querySelector('#board');


keys.addEventListener('click', (e) => {
    switch(e.target.id) {
        case '1':
            if(!isSecondNumber) firstNumber += '1'
            else secondNumber += '1';
            board.textContent += '1';
            break;
        case '2':
            if(!isSecondNumber) firstNumber += '2';
            else secondNumber += '2';
            board.textContent += '2';
            break;
        case '3':
            if(!isSecondNumber) firstNumber += '3';
            else secondNumber += '3';
            board.textContent += '3';
            break;
        case 'clear':
            board.textContent = '';
            firstNumber = '';
            secondNumber = '';
            isSecondNumber = false;
            break;
        case '4':
            if(!isSecondNumber) firstNumber += '4';
            else secondNumber += '4';
            board.textContent += '4';
            break;
        case '5':
            if(!isSecondNumber) firstNumber += '5'
            else secondNumber += '5';
            board.textContent += '5';
            break;
        case '6':
            if(!isSecondNumber) firstNumber += '6';
            else secondNumber += '6';
            board.textContent += '6';
            break;
        case 'plus':
            callFunction = add;
            isSecondNumber = true;
            board.textContent += ' + ';
            break;
        case '7':
            if(!isSecondNumber) firstNumber += '7';
            else secondNumber += '7';
            board.textContent += '7';
            break;
        case '8':
            if(!isSecondNumber) firstNumber += '8';
            else secondNumber += '8';
            board.textContent += '8';
            break;
        case '9':
            if(!isSecondNumber) firstNumber += '9';
            else secondNumber += '9';
            board.textContent += '9';
            break;
        case 'minus':
            callFunction = subtract
            isSecondNumber = true;
            board.textContent += ' - ';
            break;
        case 'equal':
            let result = callFunction(+firstNumber, +secondNumber);
            board.textContent = result;
            firstNumber = result;
            secondNumber = '';
            break;
        case '0':
            if(!isSecondNumber) firstNumber += '0'
            else secondNumber += '0';
            board.textContent += '1';
            break;
        case 'times':
            callFunction = multiply;
            isSecondNumber = true;
            board.textContent += ' x ';
            break;
        case 'divided-by':
            callFunction = divide;
            isSecondNumber = true;
            board.textContent += ' / ';
            break;           
    }
})


