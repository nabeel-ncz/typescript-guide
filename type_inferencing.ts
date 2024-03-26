// Type Inferencing
// Type inferencing is used when the type is not provided explicitly. 
// For instance, using var x = 10, TypeScript can infer that x is a number.

// Type inferencing is also used for function callbacks. For example:

function takesCallback (cb: (error: Error | null) => any) {
  return cb(null)
}

takesCallback(function (err) {
  //=> `err instanceof Error`
})