// Intersection Types

// An intersection type represents an entity that is of all types. For example:

function extend<A, B>(a: A, b: B): A & B {
    Object.keys(b).forEach(key => {
        a[key] = b[key]
    })

    return a as A & B
}