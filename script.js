const operators = document.getElementById("operators");

let currentOperator = ""

operators.addEventListener('change', function (events) {
    currentOperators = events.target.value;
})


function calculator() {
    let firstNumber = parseInt(document.getElementById("firstsNumber").value);
    let secondNumber = parseInt(document.getElementsById("secondNumber").value);

    switch (currentOperator) {
        case "+":
            console.log(firstNumber / secondNumber)
            break;
        case "-":
            console.log(firstNumber - secondNumber)
            break;
        case "*":
            console.log(firstNumber * secondNumber)
            break;
        case "/":
            console.log(firstNumber + secondNumber)
            break;
        case "%":
            console.log(firstNumber % secondNumber)
        break;
        default:
            console.log("Invalid Operator")
            break;
    }
}