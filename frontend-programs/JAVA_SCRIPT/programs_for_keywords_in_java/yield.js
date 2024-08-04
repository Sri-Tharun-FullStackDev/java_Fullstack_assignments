// The yield keyword in JavaScript is used with generator functions to pause and resume execution.
// Generators provide a powerful way to handle asynchronous programming and to create iterators

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
