## Control Flow

- [Introduction to Control Flow](#introduction-to-control-flow)
- [What is Control Flow?](#what-is-control-flow?)
- [`if`, `else`, and `else if`](#`if`,-`else`,-and-`else-if`)

## Introduction to Control Flow

We've read about the basics of taking some information and storing them in variables, but we've yet to write any code that does anything useful for us. As we begin to dive deeper into Javascript, we'll begin to write code that has purpose, and understanding control flow plays a vital role in how we tell Javascript what to do.

## What is Control Flow

**Control flow** refers to the order in which your code gets executed or evaluated. One of the primary ways we can control what gets executed in our code is through the use of **conditional statements**. The first of which we'll learn is known as the `if` statement.

## `if`, `else`, and `else if`

`if` statements are fairly easy to understand, because we constantly exercise this logic in our daily lives.

"If the water bottle is full, I'll drink the water."

"If the weather is cold, I'll wear a sweater."

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

"If the water bottle is full, I'll drink the water. Else, I'll fill up the water bottle"

"If the weather is cold, I'll wear a sweater. Else, I'll wear a shirt"

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

"If the water bottle is full, I'll drink the water. Else if the water bottle has some water, I'll drink the water and fill it up. Else, fill up the water bottle."

"If the weather is rainy, I'll use an umbrella. Else if the weather is cold, I'll wear a sweater. Else, I'll wear a shirt"

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
