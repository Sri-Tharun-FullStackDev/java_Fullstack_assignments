// The arguments object in JavaScript is an array-like object available within all non-arrow functions. It contains the values of the arguments passed to that function. This allows you to work with an unknown number of arguments, making functions more flexible.

function showArguments() {
    console.log(arguments);
}
showArguments(1, 2, 3);
