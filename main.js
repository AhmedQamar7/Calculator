import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your second number"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["addition(+)", "subtraction(-)", "multiply(*)", "division(/)"],
        message: "select your operator."
    }
]);
console.log(answer);
const { numberOne, numberTwo, Operator } = answer;
if (numberOne && numberTwo && Operator) {
    let result = 0;
    if (Operator === "addition(+)") {
        result = numberOne + numberTwo;
    }
    else if (Operator === "subtraction(-)") {
        result = numberOne - numberTwo;
    }
    else if (Operator === "multiply(*)") {
        result = numberOne * numberTwo;
    }
    else if (Operator === "division(/)") {
        result = numberOne / numberTwo;
    }
    else {
        console.log("Kindly enter valid input");
    }
    console.log("Your result is:", result);
}
