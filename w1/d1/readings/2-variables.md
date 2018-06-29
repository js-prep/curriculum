# Variables

- [What are variables?](#what-are-variables?)
- [Assigning Value to Variables](#assigning-value-to-variables)
- [Reassigning Variables](#reassigning-variables)
- [Variable Naming Conventions](#variable-naming-conventions)
- [Types of Variables](#types-of-variables)

## What are Variables?

**Variables** are used to store information so that they can be referenced and manipulated within JS. It also allows developers to label different pieces of data with descriptive names so that the functionality of the code can be more clearly understood by the reader as well as yourself. Essentially, variables are *containers* that hold some amount of information, and their sole purpose is to label and store this data in memory where they can be used throughout your program.

## Assigning Value to Variables

When you assign a variable in JS, you use the `=` symbol. The hardest thing to get used to is that this `=` symbol is termed the **"assignment operator"**, not the "equal" sign.

Here's an example of how we can use the assignment operator to create a variable within JS.

```javascript
var fullName = "Jeremy Cho"
```

Wowza! That's a lot of new syntax at once. Let's break this statement down into four pieces.

1. `var`: `var` is a special keyword ***reserved*** by Javascript. It's our way of telling JS, *"Hey you,  we're defining a new variable!"*
2. `fullName`: The text following `var` is what we're declaring as the **name** of the variable. In our example, `fullName` is how we'll refer back to what data this variable is holding.
3. `=`: The assignment operator! This is also a special syntax reserved by JS used for handling the assignment of a variable.
4. `"Jeremy Cho"`: Javascript understands this to be of something called a `string`. We'll dive deep into these structures later in the course. Briefly, however, a `string` represents a set of characters.

When we put this all together, it starts to make a lot more sense: "I want to create a new **variable** by the name of `fullName` and assign it a value of `"Jeremy Cho"`.

Lastly, to refer back to this variable we've created, we refer back to it using the variable name.

```javascript
fullName
// => "Jeremy Cho"
```

## Reassigning Variables

We just saw how we can tell Javascript to "declare" a new variable by the name of `fullName`, but what if we wanted to change the name to `"Grant Kang"`? Luckily, this behaves how you might expect.

```javascript
var fullName = "Jeremy Cho"
fullName = "Grant Kang"
// => "Grant Kang"
```

Simply use the **assignment operator** in a similar fashion to reassign the value inside the variable. What happens when you *redeclare* a variable with the same name? It's plausible to think that Javascript prevents us from trying to redeclare a variable by the same name... but it doesn't.

```javascript
var fullName = "Jeremy Cho"
var fullName = "Grant Kang"
// => "Grant Kang"
```

This functionality allows Javascript to be flexible, but at the same time causes a lot of developer frustration when used incorrectly. This example sets the tone for variable naming conventions, which can be an extremely valuable skill to learn and hammer down in the early stages of your coding career. Let's take the previous example, and exercise horrible, terrible, never to use naming conventions to the variable.

## Variable Naming Conventions

```javascript
var fn = "Jeremy Cho"
```

At first glance, this might not seem too bad. But what if we had something like this all over our code base?

```javascript
var fn = "Jeremy"
var ln = "Cho"
var a = "500 Orangethorpe Ave."
var pn = "808-419-2831"
```

You quickly start to see that this gets extremely confusing, and though it may save us a few keyboard strokes... It's not worth it in the long run.

## Types of Variables

Up until now, we've only seen examples of assigning `string`s to the variables that we create but variables can be much more than that! As you'll see soon, anything in Javascript can be assigned to a variable.

What this ***"anything"*** can be is something we'll cover fully throughout the week.