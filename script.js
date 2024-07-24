let numberA = NaN
let numberB = NaN
let operator = ""
let operatorWorks = false

let displayValue = ""

const numberButtons = document.querySelectorAll(".numberButton")
const operatorButtons = document.querySelectorAll(".operatorButton")
const evaluationButton = document.querySelector(".evaluationButton")
const clearButton = document.querySelector(".clearButton")
const display = document.querySelector(".display")

numberButtons.forEach(button => 
    button.addEventListener("click", (e) => {
        displayValue += `${e.currentTarget.textContent}`
        display.textContent = displayValue
        if (isNaN(numberA)) operatorWorks = true
    }))

operatorButtons.forEach(button => 
    button.addEventListener("click", (e) => {
        if (operatorWorks === false) return
        numberA = displayValue
        operator = e.currentTarget.textContent
        displayValue = ""
        display.textContent = `${operator}` + " "
        operatorWorks = false
    })
)

evaluationButton.addEventListener("click", () => {
    if (numberA === NaN || numberB === NaN || operator === "") return
    numberB = +displayValue
    if (numberB === 0 && operator === "/") {
        display.textContent = "You can't divide with zero!"
    }
    else {
        display.textContent = operate(+numberA, +numberB, operator)
    }
    numberA = NaN
    numberB = NaN
    operator = ""
    displayValue = +display.textContent
    operatorWorks = true
})

clearButton.addEventListener("click", () => {
    numberA = NaN
    numberB = NaN
    operator = ""
    displayValue = ""
    display.textContent = ""
    operatorWorks = false
})

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