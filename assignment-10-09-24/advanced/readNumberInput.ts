import * as readlineSync from 'readline-sync';

function readNumberInput(): number {
    const userInput = readlineSync.question("Please enter a number: ");

    if (userInput.trim() === "") {
        throw new Error("Input cannot be empty.");
    }

    const parsedNumber = Number(userInput);

    if (isNaN(parsedNumber)) {
        throw new Error("Invalid input: not a valid number.");
    }

    return parsedNumber;
}

try {
    const number = readNumberInput();
    console.log(`The valid number entered is: ${number}`);
} catch (error) {
    console.error(error.message);
}
