// User-defined Type Guards

// Type guards allow us to specify that a function implements the runtime check of this interface. 
// For example, checking whether an object is a Dog.

interface Animal {
    legs: number
}

interface Dog extends Animal {
    barks: boolean
}

function typeGuard(obj: Dog): obj is Dog {
    return !!obj.barks;
}