"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function readNumberInput() {
    var userInput = readlineSync.question("Please enter a number: ");
    if (userInput.trim() === "") {
        throw new Error("Input cannot be empty.");
    }
    var parsedNumber = Number(userInput);
    if (isNaN(parsedNumber)) {
        throw new Error("Invalid input: not a valid number.");
    }
    return parsedNumber;
}
try {
    var number = readNumberInput();
    console.log("The valid number entered is: ".concat(number));
}
catch (error) {
    console.error(error.message);
}
