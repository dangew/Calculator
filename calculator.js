let selectedOper;
let firstNumber;
let secondNumber;

// function that run when number button clicked
const numberClick = (event) => {
    const result = document.getElementById("result");
    const number = event.target.textContent;
    console.log("Number clicked:", number);
    result.value += number;
};

// function that run when operator button clicked
const operClick = (event) => {
    const number = document.getElementById("result").value;
    const operScreen = document.getElementById("oper");
    const oper = event.target.textContent;
    console.log("Oper clicked:", oper);

    // two case
    // 1: there are some number clicked
    // 2: there are no number clicked
    if (number === "") {
        // just return alert if there are no number clicked
        alert("You should have to click any number first!!");
        shakeElement(document.getElementById("result"));
        redBorderElement(document.getElementById("result"));
        return;
    } else {
        // show selected operator on screen
        operScreen.value = oper;
        // save first number in variable
        firstNumber = number;
        // save operator in variable
        // two case
        // 1: if operator is x then change it to *
        // 2: else save it as it is
        if (oper === "x") {
            selectedOper = "*";
        } else {
            selectedOper = oper;
        }
        // clear result screen
        document.getElementById("result").value = "";
    }
};

// function that run when reset button clicked
const resetClick = (event) => {
    document.getElementById("result").value = "";
    document.getElementById("oper").value = "";
};

// function that run when calculate button clicked
const calculateClick = (event) => {
    const number = document.getElementById("result").value;
    const operScreen = document.getElementById("oper");
    const oper = event.target.textContent;
    // show selected operator on screen
    operScreen.value = oper;
    // save second number in variable
    secondNumber = number;
    // calculate result
    let result = eval(firstNumber + selectedOper + secondNumber); // eval is a function that calculate string as a code
    // show result on screen
    document.getElementById("result").value = result;
    // shake
    shakeElement(document.getElementById("result"));
};

// function to add shake animation
const shakeElement = (element) => {
    element.classList.add("shake");
    setTimeout(() => {
        element.classList.remove("shake");
    }, 500);
};

// function to add shake animation
const redBorderElement = (element) => {
    element.classList.add("red-border");
    setTimeout(() => {
        element.classList.remove("red-border");
    }, 500);
};

// add event listener to all number buttons
document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", numberClick);
});

// add event listener to all operator buttons
document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", operClick);
});

// add event listener to reset button
document.getElementById("reset").addEventListener("click", resetClick);

// add event listener to calculate button
document.getElementById("calculate").addEventListener("click", calculateClick);
