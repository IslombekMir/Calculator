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
let operator = '';
let checker = '';


//nodes
const keys = document.querySelector('#keys');
const board = document.querySelector('#board');
const equal = document.querySelector('#equal');
const body = document.querySelector('body');

function eventFunction(e) {
    switch(checker) {
        case 'clear':
        case 'c':
            board.textContent = '';
            firstNumber = '';
            secondNumber = '';
            isSecondNumber = false;
            break;
        case 'backspace':
        case 'Backspace':
            if(!isSecondNumber) {
                let first = '';
                let text = '';
                first = firstNumber;
                firstNumber = first.substring(0, first.length - 1);
                text = board.textContent;
                board.textContent = text.substring(0, text.length - 1);
            } else if (isSecondNumber) {
                let second = '';
                let text = '';
                second = secondNumber;
                secondNumber = second.substring(0, second.length - 1);
                text = board.textContent;
                board.textContent = text.substring(0, text.length - 1);
            }
            break;
        case '1':
            if(!isSecondNumber) firstNumber += '1'
            else secondNumber += '1';
            break;
        case '2':
            if(!isSecondNumber) firstNumber += '2';
            else secondNumber += '2';
            break;
        case '3':
            if(!isSecondNumber) firstNumber += '3';
            else secondNumber += '3';
            break;
        case 'plus':
        case '+':
            callFunction = add;
            isSecondNumber = true;
            operator = ' + ';
            break;
        case '4':
            if(!isSecondNumber) firstNumber += '4';
            else secondNumber += '4';
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
        case 'minus':
        case '-':
            callFunction = subtract;
            isSecondNumber = true;
            operator = ' - ';
            break;
        case '7':
            if(!isSecondNumber) firstNumber += '7';
            else secondNumber += '7';
            break;
        case '8':
            if(!isSecondNumber) firstNumber += '8';
            else secondNumber += '8';
            break;
        case '9':
            if(!isSecondNumber) firstNumber += '9';
            else secondNumber += '9';
            break;
        case 'times':
        case '*':
            callFunction = multiply;
            isSecondNumber = true;
            operator = ' * ';
            break;
        case 'equal':
        case '=':
        case 'Enter':
            let result = callFunction(+firstNumber, +secondNumber);  
            firstNumber = result.toString();
            secondNumber = '';
            isSecondNumber = false;
            operator = '';
            break;
        case '0':
            if(!isSecondNumber) firstNumber += '0'
            else secondNumber += '0';
            break;
        case 'dot':
        case '.':
            if(!isSecondNumber) {
                if(!firstNumber.split('').includes('.')) firstNumber += '.';
            } else {
                if(!secondNumber.split('').includes('.')) secondNumber += '.';
            }
            break;
        case 'divided-by':
        case '/':
            callFunction = divide;
            isSecondNumber = true;
            operator = ' / ';
            break;    
    }
    updateBoard();
}

function updateBoard() {
    board.textContent = firstNumber + operator + secondNumber;
}

updateBoard();

keys.addEventListener('click', (e) => {
    checker = e.target.id;
    eventFunction();
});

body.addEventListener('keydown', (e) => {
    checker = e.key.toString();
    eventFunction();
    console.log(e.key);
})