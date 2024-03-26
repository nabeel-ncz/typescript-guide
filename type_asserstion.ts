//Type Assertions

// TypeScript also allows you to override the inferred/analyzed type to what you actually need. 
// This is used purely for telling the compiler that you know the type better than it does and it should not second guess you. 
// Don't worry, the compiler won't feel betrayed by this, and will continue helping you with the new knowledge it acquired from you.

//Example

interface Foo {
    x: number
    y: number
}

var foo = {} as Foo
foo.x = 10
foo.y = 20

// Wherever possible, it's preferable to use explicit types. For example:

var foo: Foo = {
  // The compiler will now error when forgetting properties.
}