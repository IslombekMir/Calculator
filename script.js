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

    function setNumber(inputNumber) {
        if(!isSecondNumber) firstNumber += inputNumber;
        else secondNumber += inputNumber;
    }

    switch(checker) {
        case 'clear':
        case 'c':
            board.textContent = '';
            firstNumber = '';
            secondNumber = '';
            isSecondNumber = false;
            operator = '';
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
            setNumber('1');
            break;
        case '2':
            setNumber('2');
            break;
        case '3':
            setNumber('3');
            break;
        case 'plus':
        case '+':
            callFunction = add;
            isSecondNumber = true;
            operator = ' + ';
            break;
        case '4':
            setNumber('4');
            break;
        case '5':
            setNumber('5');
            break;
        case '6':
            setNumber('6');
            break;
        case 'minus':
        case '-':
            callFunction = subtract;
            isSecondNumber = true;
            operator = ' - ';
            break;
        case '7':
            setNumber('7');
            break;
        case '8':
            setNumber('8');
            break;
        case '9':
            setNumber('9');
            break;
        case 'times':
        case '*':
            callFunction = multiply;
            isSecondNumber = true;
            operator = ' x ';
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
            setNumber('0');
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



keys.addEventListener('click', (e) => {
    checker = e.target.id;
    eventFunction();
});

body.addEventListener('keydown', (e) => {
    checker = e.key.toString();
    eventFunction();
    console.log(e.key);
})