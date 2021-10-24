let operator;
let userInput = "";
let result;
let num1;
let num2;
let potentialNumber;

function operate() {

    potentialNumber = userInput;

    if (num2 == undefined) {
        num2 = potentialNumber;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2; 
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    }
    userCalculations.textContent += " = " + result;

     textBox.textContent = result;
     num1 = undefined;
     num2 = undefined;
     potentialNumber = result;
     userInput = "";
}

function addition() {
    potentialNumber = userInput;

    if (num1 == undefined) {
        num1 = potentialNumber;
    } else {
        num2 = potentialNumber;
    }

    if (operator !== undefined) {
        userCalculations.textContent += " " + operator + " " + potentialNumber;
    }   else {
        userCalculations.textContent += potentialNumber;
    }

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else if (num1 !== undefined && result !== undefined) {
        num2 = result;
        operate();
    }

    userInput = "";
    textBox.textContent = "";
    operator = "+";
}

function subtraction() {
    potentialNumber = userInput;

    if (num1 == undefined) {
        num1 = potentialNumber;
    } else {
        num2 = potentialNumber;
    }

    if (operator !== undefined) {
        userCalculations.textContent += " " + operator + " " + potentialNumber;
    }   else {
        userCalculations.textContent += potentialNumber;
    }

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else if (num1 !== undefined && result !== undefined) {
        num2 = result;
        operate();
    }

    userInput = "";
    textBox.textContent = "";
    return operator = "-";
}

function multiply() {
    potentialNumber = userInput;

    if (num1 == undefined) {
        num1 = potentialNumber;
    } else {
        num2 = potentialNumber;
    }

    if (operator !== undefined) {
        userCalculations.textContent += " " + operator + " " + potentialNumber;
    }   else {
        userCalculations.textContent += potentialNumber;
    }

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else if (num1 !== undefined && result !== undefined) {
        num2 = result;
        operate();
    }

    userInput = "";
    textBox.textContent = "";
    return operator = "*";
}

function divide() {
    potentialNumber = userInput;

    if (num1 == undefined) {
        num1 = potentialNumber;
    } else {
        num2 = potentialNumber;
    }

    if (operator !== undefined) {
        userCalculations.textContent += " " + operator + " " + potentialNumber;
    }   else {
        userCalculations.textContent += potentialNumber;
    }

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else if (num1 !== undefined && result !== undefined) {
        num2 = result;
        operate();
    }

    userInput = "";
    textBox.textContent = "";
    return operator = "/";
}

const textBox = document.querySelector(".userInput");

const userCalculations = document.querySelector(".userCalculations");
userCalculations.textContent = "";

const input = document.querySelectorAll(".numberButton");
input.forEach(button => {
    button.addEventListener("click", (e) => {
    console.log(button.id);
    
    // if (userInput.Contains(".")) {
    //     return;
    // }

    if (userInput.length < 16) {
        userInput += button.id
    }


    // clear this somehow and somewhere. 

    textBox.textContent = userInput;
});
});

const addButton = document.querySelector("#plus");
addButton.addEventListener("click", addition);

const subtractButton = document.querySelector("#minus");
subtractButton.addEventListener("click", subtraction);

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", divide);

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", multiply);

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", operate);
