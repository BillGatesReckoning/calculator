let numberA
let numberB
let operator

function operate(numberA, numberB, operator) {
    switch(operator) {
        case "+":
            return add(numberA, numberB)
        case "-":
            return subtract(numberA, numberB)
        case "*":
            return multiply(numberA, numberB)
        case "/":
            return divide(numberA, numberB)
    }
}

function add(numberA, numberB) {
    return numberA + numberB
}

function subtract(numberA, numberB) {
    return numberA - numberB
}

function multiply(numberA, numberB) {
    return numberA * numberB
}

function divide(numberA, numberB) {
    return numberA / numberB
}