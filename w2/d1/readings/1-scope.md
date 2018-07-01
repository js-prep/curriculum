# Scope

- [What is scope?](#what-is-scope?)
- [Global Scope](#global-scope)
- [Nested Scopes](#nested-scopes)

## What is scope?

**Scope** in Javascript determines what variables you have access to. Javascript
has function scope, meaning every function creates a new scope. There are
only two types of scopes (global scope and local scope) and a variable can only
be defined in one or the other.

## Global Scope

A variable defined in the **global scope** is accessible anywhere in your code. Any variable declared outside of a function belongs to the global scope.

```
var outside = "hello"

function someRandomFunction () {
  var inside = "world"

  return outside + ' ' + inside
}
```

In the example above, our variable `outside` is defined in the global scope and
can be accessed within our function.

## Local Scope

Anytime Javascript runs through a new function, it creates a new **local
scope**. Variables defined inside a function are not accessible to other
functions outside of its local scope.

Here's an example of how local scope can affect your code:

```javascript
function firstFunction () {
  var firstVariable = "hello world"
}

function secondFunction () {
  return firstVariable
}

secondFunction()
```

In this instance, we would run into a reference error where firstVariable is
not defined because our `secondFunction` does not have access to our
variable `firstVariable`. This is because they are stored in their own local
memories.
`firstVariable` is a local variable and thus can only be accessed within its
local scope. Unlike global variables which are deleted when you close the
browser, local variables are deleted when the function is completed.

Here's another example leading to a reference error because of scope:
```javascript
function helloWorld () {
  var greeting = "hello world"
}

console.log(greeting) // => greeting is not defined
```

## Nested Scopes

**Lexical scoping** is a behavior in Javascript that allows every inner function
to access its outer levels.

```javascript
function outerFunction () {
  const outside = "hello"

  function innerFunction () {
    const inside = "world"
    console.log(outside) // => "hello"

    function innererFunction () {
      const doubleInside = "Scope scope scope"
      console.log(outside) // => "hello"
      console.log(inside) // => "world"
    }
  }
}
```
