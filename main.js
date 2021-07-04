/* 
TODO: 
    - Make rainbow mode work
    - When there's only a number and an operand, and you press =,
    ensure that the answer still evaluates.
    - Fix button layout
    - Fix responsiveness
    - User input linting, i.e. no double dots
    - Add brackets?
    - Dark mode?
*/




const output = document.getElementById('output');
const userInput = document.getElementById('userInput');


function doIt(event) {
    let value = event.target.innerText;
    if (value === 'x') {
        value = '*';
    }
    userInput.value += value;
    
}

function allClear() {
    output.value = '';
    userInput.value = '';
}

function del() {
    userInput.value = userInput.value.slice(0,-1);
}

function calculate() {
    output.value = Function(`return ${userInput.value}`)();
}

function rainbowMode() {
    console.log('lol');
}