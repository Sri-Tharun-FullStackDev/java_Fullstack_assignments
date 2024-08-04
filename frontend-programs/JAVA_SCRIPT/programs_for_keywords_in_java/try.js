// try keyword is used to handle the exception given by the block of program and send an exception to the catch block

try {
    console.log("Try block");
    throw new Error("Error in try block");
} catch (e) {
    console.log("Catch block: " + e.message);
}
