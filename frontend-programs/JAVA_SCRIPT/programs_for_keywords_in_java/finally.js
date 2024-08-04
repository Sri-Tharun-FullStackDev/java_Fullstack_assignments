// finally keyword is also used in exception handling and will be exected even if the try catch block is exectued or not.

try {
    console.log("Try block");
    throw console.error("error");
} catch (e) {
    console.log("Catch block");
} finally {
    console.log("Finally block");
}
