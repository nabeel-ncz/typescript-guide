// typeof

// TypeScript also has a typeof operate that can be used in type expressions. typeof takes a value and produces the type a value has.
// TypeScript can also use typeof with type expressions. This is useful for extracting the type from a value - commonly used for lazy loading.

// Define an object with properties
const myObject = {
    name: "John",
    age: 30
};

// Use typeof to refer to the type of properties
type MyObjectType = typeof myObject;

const myName: MyObjectType['name'] = "Alice"; // Valid assignment
const myAgeProp: MyObjectType['age'] = 25; // Valid assignment
const myInvalidProp: MyObjectType['invalidProp'] = "invalid"; // Error: Property 'invalidProp' does not exist on type '{ name: string; age: number; }'
