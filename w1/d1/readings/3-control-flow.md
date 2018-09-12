## Control Flow

- [Introduction to Control Flow](#introduction-to-control-flow)
- [What is Control Flow?](#what-is-control-flow?)
- [`if`, `else`, and `else if`](#if-else-and-else-if)
- [`for` Loop](#for-loop)

## Introduction to Control Flow

We've read about the basics of taking some information and storing them in variables, but we've yet to write any code that does anything useful for us. As we begin to dive deeper into Javascript, we'll begin to write code that has purpose, and understanding control flow plays a vital role in how we tell Javascript what to do.

## What is Control Flow

**Control flow** refers to the order in which your code gets executed or evaluated. One of the primary ways we can control what gets executed in our code is through the use of **conditional statements**. The first of which we'll learn is known as the `if` statement.

## `if`, `else`, and `else if`

`if` statements are fairly easy to understand, because we constantly exercise this logic in our daily lives.

***"If the water bottle is full, I'll drink the water."***

***"If the weather is cold, I'll wear a sweater."***

These two statements are in essence what we strive to accomplish with `if` statements. We give our code a condition - if that condition gets met, execute this line of code. If not, skip it. Here's what an `if` statement might look like in Javascript.

```javascript
if (bottleIsFull) {
    // Drink
}

if (isWeatherCold) {
    // Wear sweater
}
```

`if` statements are followed by a set of parentheses with some evaluated code that determines whether the block inside the `if` statement runs or gets skipped.

Simple enough. Let's move on!

The `if` statement gives us the power to tell Javascript to execute some lines of code if a condition is met. What if we also wanted to handle what code is run when the condition **isn't** met? Here's where the `else` statement comes in. With `else` statements, we're able to handle the execution of our program when the `if` condition is skipped. Taking the previous two English written conditions, we can add an `else` statement:

***"If the water bottle is full, I'll drink the water. Else, I'll fill up the water bottle"***

***"If the weather is cold, I'll wear a sweater. Else, I'll wear a shirt"***

Here's what this looks like in Javascript:

```javascript
if (bottleIsFull) {
  // Drink
} else {
  // Fill up
}

if (isWeatherCold) {
  // Wear sweater
} else {
  // Wear shirt
}
```

Make sure you take a good look at the structure of this statement. Particularly how the condition gets surrounded by parentheses and how the blocks are surrounded by curly brackets `{}`.

Awesome! We now can tell Javascript what to do given that a condition evaluates to be true, OR the condition evaluates to be false. However, we can do more. What if we wanted to handle some intermediary condition, or evaluate multiple related conditions to determine what code gets executed? To accomplish this, we can use the `else if` statement.

As you might imagine, `else if` looks and behaves similar to an `if` statement, but only runs if the `if` and `else if` conditions before it are not run. Here's the English version again:

***"If the water bottle is full, I'll drink the water. Else if the water bottle has some water, I'll drink the water and fill it up. Else, fill up the water bottle."***

***"If the weather is rainy, I'll use an umbrella. Else if the weather is cold, I'll wear a sweater. Else, I'll wear a shirt"***

You can probably guess what this looks like in Javascript:

```javascript
if (bottleIsFull) {
  // Drink
} else if (bottleHasWater) {
  // Drink
  // Fill up
} else {
  // Fill up
}

if (isRaining) {
  // Use umbrella
} else if (isCold) {
  // Wear sweater
} else {
  // Wear shirt
}
```

Also note that Javascript doesn't limit how many `if` and `else if` conditions are chained. Our example had one of each, but you can chain however many your logic requires.

```javascript
if (extremelyCold) {
  // Turn on heater
} else if (justCold) {
  // Wear sweater
} else if (perfectWeather) {
  // Go to beach
} else if (prettyHot) {
  // Eat icecream
} else if (extremelyHot) {
  // Turn on air conditioner
} else {
  // What else is there?
}
```

--------------------------
## `for` Loop
Loops are used in javascript if you want to run a block of code repeatedly. A `for` loop will give you more control over how you will run the code over and over again by manipulating a _counter_.

Let's take a look at two examples accomplishing the same task with one example using a `for` loop and the other example without the `for `loop.

Example (no `for` loop)
```javascript
var color = 'green'
console.log(color[0]) // 'g'
console.log(color[1]) // 'r'
console.log(color[2]) // 'e'
console.log(color[3]) // 'e'
console.log(color[4]) // 'n'
```

In the code above, we're printing every letter from our _variable_ `color` one by one. You can immediately see the problem here..the code is tedious to write and more importantly can't be scaled since it's not programatic. Imagine we had to do this for a random _input_ and we were given an input with 200 characters long.

Using a `for` loop we can create the same task with less code and we can handle much larger inputs.

Example (with `for` loop):
```javascript
var color = 'green'

for (var i = 0; i < color.length; i++) {
  console.log(color[i])
}
```

If you run the code above, you will get the same output as the first example.

#### Breaking down the `for` loop
So what is the syntax for a `for` loop and what is happening exactly?

There are essentially 3 parts to a `for` loop that are separated by the _semicolons_. You need all three rules to be present for a `for` loop to function.

The first rule is the initialization of the variable which usually represents a _counter_ or _index_ (whatever you want to call it). Most people use the _variable_ `i` to represent an _index_.
```javascript
for (var i = 0;)
```

The second rule tells us when to stop the `for` loop. The second rule will always equate to a _true or false_ statement. While the statement is `true`, the `for` loop will keep iterating until it is `false`. In this case, we are saying that if our _variable_ `i` is less than `word.length`..then we want to stop the `for` loop.
```javascript
var greeting = 'hello'
for (var i = 0; i < word.length)
```

The third rule tells us what to do with our initial _variable_ after every iteration. In this case we're telling our `for` loop to increment our variable `i` by `1` everytime we've ran our block of code inside the `for` loop.
```javascript
var greeting = 'hello'
for (var i = 0; i < word.length; i++) {
  /* do stuff here */
}
```
Let's tie this all together to see what's happening.

1. We've set our initial variable from our `for` loop `i` to `0`.
2. We created our stopping point by telling our `for` loop to stop when `i` is less than `word.length` which is `5`.
3. We increment our variable `i` by `1` everytime our `for` loop finishes its block of code once.