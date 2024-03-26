// Interfaces

// Interfaces are the way to type anything more complicated than our basic types, including functions and classes. 
// Although you'll probably never use it in place of a function and class, 
// you can imagine interfaces as the basic building block. The syntax is similar to JavaScript object, 
// but using types and a couple of little syntax changes/additions.

interface MyInterface {
    value: string // Has a property which is a `string`.
    method(): number // Has a method that returns a `number`.
}

//implementation
const myImpl1: MyInterface = {
    value: "example string",
    method() {
        return 42;
    }
}

class MyClass implements MyInterface {
    value: string = "example string";
    method(): number {
        return 100;
    }
}

// Interfaces can also use index types, which can be string or number.

interface Dictionary {
    [index: number]: string
}

//✅
const obj1: Dictionary = {
    1: "kfdslf",
    2: "oroo34i2p"
}
//❌
const obj2: Dictionary = {
    hello: "jdlkfsjd",
    hello2: "fdsfls"
}
