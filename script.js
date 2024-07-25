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
        if (e.currentTarget.textContent === ".") {
            if (displayValue === "" || displayValue.includes(".")) return
        }
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
        display.textContent = Math.round(operate(+numberA, +numberB, operator) * 1000) / 1000
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

clearButton.addEventListener("mouseenter", () => {
    display.innerHTML = "<image src='./images/scaredMyLittlePony.png' id='myLittlePonyImg'>"
})
clearButton.addEventListener("mouseleave", () => {
    display.textContent = displayValue
})

const calculator = document.querySelector(".calculator")
calculator.style.width = `${+calculator.offsetHeight * 0.6}px`

const runAwayButton = document.querySelector("#runAwayButton")
runAwayButton.addEventListener("click", () => {
    document.querySelectorAll("button").forEach((button) => {
        button.style.position = "absolute"
        button.style.top = `${Math.random() * 1000}px`
        button.style.left = `${Math.random() * 1000}px` 
    })
    calculator.style.backgroundImage = "url(./images/satan.webp)"
})

const HTMLdocument = document.querySelector("html")

runAwayButton.addEventListener("mouseenter", () => {
    HTMLdocument.style.backgroundColor = "black"
    HTMLdocument.style.color = "white"
})
runAwayButton.addEventListener("mouseleave", () => {
    HTMLdocument.style.backgroundColor = "white"
    HTMLdocument.style.color = "black"
})