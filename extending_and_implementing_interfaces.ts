// Extending and Implementing Interfaces

// Interfaces can be used for the implementation of classes using the implements keyword which we'll use later. 
// For now, we'll use extends to extend an interface with more information.

interface Animal {
    legs: number
}

interface Dog extends Animal {
    barks: boolean
}

const smallDog: Dog = {
    legs: 2,
    barks: false
}