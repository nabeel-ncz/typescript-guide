// Type Shorthand

// Types can also be used with a shorthand syntax. In parameters, for instance, one can write an inline interface. 
// It's also possible to use the type alias to create types from the shorthand.

type HelloWorld = string;
type PrimitiveArray = Array<string | number | boolean>;

// we can now use our type alias as a normal type...
function print(): HelloWorld {
    return 'Hello World'
};

const mixedArray: PrimitiveArray = [42, 'is', 'definitely', true];

// ...or we can write an inline interface in parameters
function getLabel(obj: { label: string }): string {
    return obj.label
};