// The with statement in JavaScript allows for simplified access to object properties by establishing a default object scope. 

const obj = { a: 1, b: 2 };
with (obj) {
    console.log(a, b);
}
