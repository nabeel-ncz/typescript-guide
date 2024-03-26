// Generics

// Generics provide a way to create reusable interfaces that accept any type. Here's a simple example:

function identity<T>(arg: T): T {
    return arg
}

// This is just a building block for much more complex logic. When invoking a generic, you can pass the type inline:

var output = identity<string>('myString') // Type of `output` is 'string'.

// Or let it be inferred.

var output = identity('myString') // Type of `output` is 'string'.

// We'll dive into more complex generic usages through index.ts. 
// Generics can also be used with type and interface.

