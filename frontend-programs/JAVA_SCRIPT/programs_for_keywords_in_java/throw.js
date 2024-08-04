// throw is used to give an customized excepttion to the user.

function checkNumber(num) {
    if (num < 0) {
        throw new Error("Negative number");
    }
    return num;
}
try {
    checkNumber(-1);
} catch (e) {
    console.log(e.message);
}
