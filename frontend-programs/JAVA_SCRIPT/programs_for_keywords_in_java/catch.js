// catch key word is used in exception handling to manage the exception sent by the try block and executes it properly or can give an custom exception.

try {
    throw new Error("An error");
} catch (e) {
    console.log("Caught an error: " + e.message);
}
