// Tuples

// Tuple types are used to represent an array where the number of elements are known.

var x: [string, number];
// Initialize it.
x = ['hello', 10] // OK.
// Initialize it incorrectly.
x = [10, 'hello'] // Error.

// When accessing an element with a known index.

console.log(x[0].substr(1))
console.log(x[1].substr(1)) //=> Error: Property 'substr' does not exist on type 'number'.
