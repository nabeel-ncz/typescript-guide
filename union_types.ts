// Union Types

// Union types provide us with a way to express that a value can be one of many types. For example:

var value: string | string[] = 'test'

console.log(value.length) // Works because it exists on both `string` and `Array`.