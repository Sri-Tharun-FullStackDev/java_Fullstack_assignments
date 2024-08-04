

// Enum is not natively supported in JavaScript, but you can simulate it
// However, you can mimic the behavior of enums in JavaScript using objects
const Colors = Object.freeze({
    RED: Symbol("red"),
    BLUE: Symbol("blue"),
    GREEN: Symbol("green")
});
console.log(Colors.RED);
