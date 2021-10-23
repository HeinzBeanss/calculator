let operator;
let userInput = "";
let result;
let num1;
let num2;

function operate() {

    if (num2 == undefined) {
        num2 = userInput;
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
     userInput = result;

     if (typeof userInput == "number") {
        userInput = userInput.toString(); // find out how to convert a string properly david wtf..
    }
    //  num1 = userInput;
     //console.log(result);
}

function addition() {
    if (num1 == undefined) {
        num1 = userInput;
    } else {
        num2 = userInput;
    }

    userCalculations.textContent += " + " + userInput;

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else {
        userInput = "";
    }

    if (typeof userInput == "number") {
        userInput = userInput.toString(); // find out how to convert a string properly david wtf..
    }

    textBox.textContent = "";
    operator = "+";

    
}

function subtraction() {
    if (num1 == undefined) {
        num1 = userInput;
    } else {
        num2 = userInput;
    }

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else {
        userInput = "";
        textBox.textContent = "";
        
    }
    return operator = "-";
    //result = num1 - num2;
}

function multiply() {
    if (num1 == undefined) {
        num1 = userInput;
    } else {
        num2 = userInput;
    }

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else {
        userInput = "";
        textBox.textContent = "";
        
    }
    return operator = "*";
    //result = num1 * num2;
}

function divide() {
    if (num1 == undefined) {
        num1 = userInput;
    } else {
        num2 = userInput;
    }

    if (num1 !== undefined && num2 !== undefined) {
        operate();
    } else {
        userInput = "";
        textBox.textContent = "";
        
    }
    return operator = "/";
    //result = num1 / num2;
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
equalsButton.addEventListener("click", operate)