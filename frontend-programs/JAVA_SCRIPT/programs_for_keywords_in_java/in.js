// JavaScript in operator is an inbuilt operator which is used to check whether a particular property exists in an object or not. It returns a boolean value true if the specified property is in an object, otherwise, it returns false.

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
