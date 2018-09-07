# Intro to Strings/Numbers

- [Manipulating Strings 1](#manipulating-strings-1)
- [Manipulating Strings 2](#manipulating-strings-2)
- [Manipulating Strings 3](#manipulating-strings-3)

___________________
## Manipulating Strings 1
  Now that we've learned how to create a function and call that function, we can use them   as a way to manipulate different types of inputs in **javascript**.


### Algorithm: reverseString

1. Let's go over the first algorithm _Manipulating Strings_ step by step to get a better feeling of what we can do with the types of control flow we have learned (if/else statements and for loops). For this exercise we are required to create a `function` _reverseString_.

  ```javascript
  function reverseString () {

  }
  ```
2. It also tells us that _reverseString_ will take an argument _string_. Let's go ahead and label our first input as `string` for now as the name of the function suggests we will be trying to reverse a string as our output.
```javascript
function reverseString (string) {

}
```
3. For our final instructions, we want the function `reverseString` to return the input `string` in reverse order as our output. We have our function definition setup but now we need to write the instructions to achieve the functionality of `reverseString`. Now this is where things might get a bit tricky. Using a step by step approach and thinking about your solution before starting to write your code is always a helpful idea.

4. For starters, I know that my output will be a manipulation of our `string` input. I'm going to start by creating a new variable to store my output in which I will `return` in the end.
```javascript
function reverseString (string) {
  var output = ''
}
```
We've created a new variable `output` and assigned it to an empty `string`. On second thought, labeling our stored output variable as `output` might seem a bit broad for our case, so let's choose a variable that's a bit more semantic.
```javascript
function reverseString (string) {
  var reversedString = ''
}
```
Much better! Labeling our `variable` which will represent our final output as `reversedString` is a much better representation of what this variable will become in the end.

5. Now, we know we need to `return` our input `string` in reverse. We've created a `variable` `reversedString` so that we can store the letters of `string` in reverse order.
To do this, we'll need to manipulate our `string` input. We know how to use a `for` loop through a string to access/manipulate each character within the`string`.

```javascript
function reverseString (string) {
  var reversedString = ''

  for (var i = 0; i < string.length; i++) {
    /* instruction for for loop */
  }
}
```
Using a `for` loop allows us to tell _javascript_ to run through each character of our `string`. Hmm....this doesn't quite help our case however because we want to access each character but specifically in reverse order.

6. The key here is not avoiding our use of the `for` loop, but changing the rules. `for` loops can be very powerful in javascript as we're not limited to just looping through a list through the rules. 
We know that the first rule in a `for` loop statement represents the initialization of our variable counter. Right now it's been initialized as `0` to represent the `index` of our `string`. _However_, we want this loop to start from the end so that we can manipulate this string in reverse order.

* The question is: _How can we get the last index of our string?_
We can use the `length` method to get the _length_ of our string. 
* _How does this help us?_: We know that the `length` method will give us a `number` value of the length of a `string`. So in this example below, we can see that the length of the string `'hello'` will return `5`.
```javascript
var someWord = 'hello'
console.log(someWord.length) // --> 5
```
* Now if we wanted to access the **last** letter of our string `'hello'`, we know that we need the _4th index_ because javascript is `0th indexed`. So now that we have the length of the word, we can simply say we want the _length of the word MINUS one_.
```javascript
var someWord = 'hello'
console.log(someWord[someWord.length - 1]) // --> 'o'
```
* Why does this work?
We know that `someWord.length` is `5`. We need the `4th` index to grab the last letter of `someWord`. `5 - 1` is `4`. So in this case `someWord[someWord.length - 1]` is exactly the same as `someWord[4]`!

* Let's get back to our algorithm and reiterate our original rule for the `for` loop to use this concept.
```javascript
function reverseString (string) {
  var reversedString = ''

  for (var i = string.length - 1; i < string.length; i++) {
    /* instruction for the for loop */
  }
}
```
Now our for loop starts its counter from the `length` of our `input` minus one, aka the last _index_ of our `string`.

7. We're not finished yet however. Our for loop tells our counter `i` to increment by 1 every loop. This is a problem because our counter starts from the end of our `string` input now. Rather than incrementing our counter we should be decreasing it down to 0.
We can do this by simply changing the 3rd rule in our `for` loop.
```javascript
function reverseString (string) {
  var reversedString = ''

  for (var i = string.length - 1; i < string.length; i--) {
    /* do something here */
  }
}
```

* Let's take a step back and see what we have so far for our `for` loop. Let's pretend our `string` input will be the string `'hello'` for now. Our rules state that we will _start_ a counter `i` from `4`. After every loop we will _decrease_ `i` by `1`. We will stop our for loop _if_ `i` is _less than_ `string.length` which is `5`.
* Hmm..there may be a problem here. If our _counter_ starts at 4 and we stop our loop if `i` is less than `5`..that means our loop will stop on the very first loop and nothing will ever happen. We need to change this rule so that we will stop the loop when our _counter_ reaches the `first index` of our `string`... aka the _0th index_

```javascript
function reverseString (string) {
  var reversedString = ''

  for (var i = string.length - 1; i >= 0; i--) {
    /* do something here */
  }
}
```
Great! Now our `for` loop counter will start from the last index of our string, keep going as long as it's greater than or equal to 0, and decrement by 1 after every loop.

```javascript
function reverseString (string) {
  var reversedString = ''

  for (var i = string.length - 1; i >= 0; i--) {
    console.log(string[i])
  }
}

reverseString('hello')
```

* Go ahead and _console.log_ `string[i]` within our for loop as shown above with the testcase `'hello'`. You should see it print `o`, `l`, `l`, `e`, `h` one by one. Cool, our for loop is behaving exactly as we want it. In this instance when we call `reverseString` with `'hello'`, `i` starts at `4` then 3, 2, 1, 0,... and then breaks out of our for loop. So we are logging `string[4]`, `string[3]`, `string[2]`, `string[1]`, `string[0]`, one by one through our for loop.

8. We're still not quite done yet so let's finish this up. Our problem says that we need to `return` the input `string` in reverse. Now that we have access to every character of `string` in reverse order all we have to do is store it to create a _new string_. This is easily done by just concatenating `string[i]` to our output variable `reversedString` we created earlier.

```javascript
function reverseString (string) {
  var reversedString = ''
  
  for (var i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i]
  }

  return reversedString
}

reverseString('hello')
```
* Make sure to return `reversedString` __AFTER__ the `for` loop. If we break each step of the for loop down we can see this in our test case for `'hello'`

| i       | string[i]          | reversedString  | reversedString + string[i]  |
| ------------- |:-------------:| -----:| -----:|
| 4      | 'o' | '' | 'o'
| 3      | 'l'      |   'o' | 'ol'
| 2 | 'l'      |    'ol' | 'oll'
| 1 | 'e'      |   'oll' | 'olle'
| 0 | 'h'      |    'olle' | 'olleh'

When you run `reverseString('hello')` you should get the output `'olleh'`. You can use `console.log` as shown below within the for loop to see how reversedString is changing after every loop.

```javascript
function reverseString (string) {
  var reversedString = ''
  
  for (var i = string.length - 1; i >= 0; i--) {
    console.log(reversedString)
    reversedString = reversedString + string[i]
  }

  return reversedString
}

reverseString('hello')
```

Phew..that was a lot of work for something very simple, but this will come second nature in no time if you keep practicing problems like this. Try running the code with a few different inputs to make sure it's working as intended. 
We learned how to:
* Change and use the rules within a `for` loop
* Use the `for` loop to manipulate a `string` input
* Concatenate characters into an empty string variable

__________________________

## Manipulating Strings 2
  We now have a better understanding of how we can use for loops to manipulate strings. In this problem however, we are asked to manipulate a string of words.
  

### Algorithm: longestWord

1. _Manipulating Strings 2_ asks to create a function longestWord that will take a string argument and return the longest word from the string. We can assume that the input will always have a length greater than 1, so there will always be at least one word.

2. We know how to get the length of a string using the `length` method. The problem here is how can we tell javascript to get the length of each word? Let's break this down a bit:

  * We need to somehow identify each word from a string
  * We need to identify the length of each word and compare them to the other words

#### Identifying each word from a string

Let's imagine that we are looping through a string. Let's just use the example `'I love coding'` for now. During each iteration of the loop, how can we tell if a new word has started? The answer is the _spaces_. Every word is separated by a _space_. Knowing this, we can tell javascript that everytime we encounter a space ` ` it is the end of the previous word and the start of a new word.

* With this, we can go ahead and loop through our _string_ input and keep a `counter` of each letter until we reach a _space_. Then we know the word has ended, we'll save the counter we've been adding up and that'll be the length of our first word. We can repeat this process and then compare the longest words after we are done looping through the string.

  * _This is one way to solve the problem but it can be a bit tedious and a bit tricky storing each length of every word using a counter because you will have to somehow correspond every word length to its word_. It would be great if we can just separate each word into a list.

    * When you hear the word _list_ the first thing that should pop in your head is an `Array`. We haven't been dealing with Arrays much, but arrays are just a list of data in javascript. ie.
    ```javascript
    var myArray = [1, false, 'hello', 531, 'aaihoiqwho']
    ```

#### Creating an array from a string

There's many ways to do this but for our purpose we'll be learning the `split` method (ref: https://www.w3schools.com/jsref/jsref_split.asp).

* `split`
1. The `split` method only works for strings
2. It takes in a string argument
3. The string argument tells the method which string value to look for when splitting the original string.
4. The output for the `split` method will return a new `Array` of all the values in the original array split by the argument.

Example:
```javascript
var myString = 'i can split the world'
var myStringSplit = myString.split(' ')
console.log(myStringSplit) // --> ['i', 'can'. 'split', 'the', 'world']
```

We can see from the example above, we used the `split` method on our string variable `myString`. We told it to split the string by every _space_ `' '`. A new array will be created and stored in the value `myStringSplit`. Try it out for yourself! Let's look at another example:

Example 2:
```javascript
var anotherString = 'mississippi'
// Can you spell mississippi without the i's?
var mississippilessly = anotherString.split('i')
console.log(mississippilessly) // --> ['m', 'ss', 'ss', 'pp', '']
```

Now we can use the split method to separate every word from a string to solve our problem.

#### Looping through an array
Now that we have an array of each word from our original string input we need to get the length of every word and also be able to compare it to find out if it is the largest word from our array. Just like looping through a string, our array is separated by indices and can also be looped through using a `for` loop in the same manner:
```javascript
var myArray = ['hello', 'world', 2, '?!?', 'I AM A STRING']

for (var i = 0; i < myArray.length; i++) {
  console.log(i, myArray[i]) // --> 0, 'hello'
}
```

#### Using counters
Creating a __variable__ to keep a _counter_ can be very useful in solving these types of algorithms. We can use a variable to store the current _longestWord_ while we iterate through our _array_.

Example:
```javascript
var myArray = ['I', 'love', 'coding']
var longest = ''

for (var i = 0; i < myArray.length; i++) {
  /* Compare each word's length with the current value of the variable longest */
}
```

We've created a variable `longest` and assigned it to an empty string `''`. We'll compare every _word_ during our `for` loop with the current value of `longest`.

Example:
```javascript
var myArray = ['I', 'love', 'coding']
var longest = ''

for (var i = 0; i < myArray.length; i++) {
  var currentWord = myArray[i] // In here, we are storing the current word myArray[i] to currentWord just as a reference. This is helpful and advised just for readability and separation of concerns.
  
  if (currentWord.length > longest.length) {
    // If the currentWord's length is greater than the length of our current longest word...
    longest = currentWord
    // then reassign our currentWord as longest
  }
}
```

* Make sure to return our longest word after the `for` loop has completed to complete our function `longestWord`. Your end function should look something like this:

```javascript
function longestWord (sentence) {
  var longest = ''

  for (var i = 0; i < sentence.length; i++) {
    var currentWord = sentence[i]

    if (currentWord.length > longest.length) {
      longest = currentWord
    }
  }

  return longest
}

longestWord('I love coding') // --> 'coding'
```

| i       | currentWord          | longest  |
| ------------- |:-------------:| -----:| -----:|
| 0      | 'I' | '' |
| 1      | 'love'      |   'I' |
| 2 | 'coding'      |    'love' |

______________________

## Manipulating Strings 3

### Algorithm: letterChanges
Similar to the previous algorithms, we're asked to create a function that takes in a _string_ as an argument. For this problem, we need to change every alphabetical letter within the _string_ to the letter that follows it in the alphabet _(ie. a becomes b, c becomes d, z becomes a)_.

#### Using an array to create a table
Immediately, we know that we need to loop through our string to identify each letter in our string. Unforunately, there's no method in javascript that helps us identify a certain character as a letter of the alphabet. We do have a way to create a list however. Using a list of characters, we can create our own alphabet that will act as a map to solve our problem.

```javascript
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
```
If this approach looks long and tedious you can also simply use the code below using the `split` method. Same results.
```javascript
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
```

------------

Now, how can we use our array of letters `alphabet` to help us translate each letter from our `string` input into the letter that comes after it?

The key here, is to use _indexing_.
We know that `alphabet[0] === 'a'`, `alphabet[1] === 'b'`, `alphabet[25] === 'z'`, _etc_.

Let's look at an example for now. Imagine we have a function with the string input `'abc'`.

```javascript
function letterChanges (string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
}

letterChanges('abc')
```

We know that the first character from our argument will be `'a'` which is the `0th index` from `alphabet`. If we wanted the letter that follows it, we simply need the `1st index` from `alphabet`, which will be `alphabet[1]` _aka_ `alphabet[0 + 1]`.

Therefore, if we have the index of our _letter_ in the alphabet, we simply need to add _1_ to the _index_ to get the index of the following _letter_.

________________________

#### `indexOf` method

The problem now is, how do we get the index of a letter from our `alphabet`? We can use the javascript method `indexOf` _(https://www.w3schools.com/jsref/jsref_indexof_array.asp)_. 

* `indexOf` can be used on a **string** or an **array**
* It takes in a **string** input
* It will return the **beginning** _index_ of the *string* argument that is passed in as the argument
* If `indexOf` does **NOT** find the string argument, it will return `-1`

Example:

```javascript
var myList = ['hello', 'a', 'b', 'world']
console.log(myList.indexOf('hello')) // --> 0
console.log(myList.indexOf('b')) // --> 2
console.log(myList.indexOf('a')) // --> 1
console.log(myList.indexOf('universe')) // --> -1
```

Let's tie this all together and see what we can come up with..

```javascript
function letterChanges (string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (var i = 0; i < string.length; i++) {
    var stringIndex = alphabet.indexOf(string[i])
    var nextLetter = alphabet[stringIndex + 1]
  }
}

letterChanges('hello')
```

_What's going on here?_
1. We've created an array of our `alphabet`.
2. We use `for` loop to go through our `string` argument.
3. We create a new _variable_ `stringIndex` and assign it to the index of the current letter in the iteration from our alphabet.
    * so for our first iteration, when `i = 0`, `string[i] === 'h'`, when `string === 'hello'`.
    * therefore, `alphabet.indexOf(string[i])` **OR** `alphabet.indexOf('h')` will return `8`.
    * SO... we've assigned `stringIndex = 8` when `i = 0`(the first iteration of our loop).
4. We create another _variable_ `nextLetter` and assign it to `alphabet[stringIndex + 1]`
    * So when `i = 0`, `stringIndex = 8`
    * Therefore, `alphabet[stringIndex + 1]` **OR** `alphabet[9]` is `'i'`

Cool, so doing this, `nextLetter` will always represent the next letter from our alphabet, **EXCEPT** in the case where our input is `'z'`. That's because our algorithm will try to grab `alphabet[26]` which doesn't exist. This is what's know as an **edge case**; a case within the algorithm that doesn't abide by our normal solution and usually requires a special condition just for that one specific case. So, to avoid this edge case, we can simply add an `if` statement to check if the current letter is `z`, in which case we will redirect it to the index of letter `'a'`.

```javascript
function letterChanges (string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  for (var i = 0; i < string.length; i++) {
    var stringIndex = alphabet.indexOf(string[i])
    // stringIndex 25 is 'z'
    if (stringIndex === 25) {
      // assign nextLetter to alphabet[0] aka 'a'
      var nextLetter = alphabet[0]
    } else {
      // else..if the current letter is not z, we will just follow the normal procedure
      var nextLetter = alphabet[stringIndex + 1]
    }
  }
}

letterChanges('hello')
```

Great! We've now covered our edge case and we're able to identify the next letter for each character from our `string`. We're not doing anything with it yet however, so let's concatenate each letter into a separate variable for our results.

```javascript
function letterChanges (string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var result = ''

  for (var i = 0; i < string.length; i++) {
    var stringIndex = alphabet.indexOf(string[i])

    if (stringIndex === 25) {
      var nextLetter = alphabet[0]
    } else {
      var nextLetter = alphabet[stringIndex + 1]
    }
    // Remember.. this syntax is the same as result = result + nextLetter
    result += nextLetter
  }

  // make sure to return our result AFTER the loop has finished
  return result
}

letterChanges('hello')
```

In the example above, we should get `'ifmmp'` from our string input `'hello'`.

______________________________________
#### More edge cases..

We're not done yet! Our problem will also possibly include special characters such as ` `, `_`, `*`, `!`, which we will have to ignore. This is just another edge case and we can simply create a statement saying if we run into any **non-alphabetical** character, just ignore it.

```javascript
function letterChanges (string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var result = ''

  for (var i = 0; i < string.length; i++) {
    var stringIndex = alphabet.indexOf(string[i])
    var nextLetter = ''

    if (stringIndex === 25) {
      nextLetter = alphabet[0]
    }

    if (stringIndex > 0) {
      nextLetter = alphabet[stringIndex + 1]
    }

    result += nextLetter
  }

  return result
}

letterChanges('hello')
```

We changed up our code a little bit here, because now we have two `if` statements. Rather than declaring `nextLetter` multiple times, we can declare it once, and then assign a value based on which `if` statement it hits.

We know that using the `indexOf` method, if the character we're looking for does not exist (any non-alphabet letter) it will return `-1`. Therefore, we can simply state if `stringIndex > 0` then we can assume it is a letter from our `alphabet` to cover our edge case.

__________________________

We still have one final problem before we're finished with our problem. The problem also tells us that if our translated letter is a _vowel_, we need to capitalize it within our final result.

_How can we tell Javascript if a certain letter is a vowel_?
You probably know the answer to this by now. Just like before with our alphabet, there's unforunately no built-in method for us to tell javascript that a character is a _vowel_. So just like before, we're going to need to create another array that will act as a hash table for our `vowels`.

We then check if the translated letter is included in our list of vowels, then we need to capitalize it using the `toUpperCase` method (https://www.w3schools.com/jsref/jsref_touppercase.asp).
  * `toUpperCase` will only work on a _string_
  * it will capitalize the `string` if it's a letter regardless if it already capitalized or not
  * `toUpperCase` does not take any arguments and will mutate the original string and not return anything


```javascript
function letterChanges (string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var result = ''

  for (var i = 0; i < string.length; i++) {
    var stringIndex = alphabet.indexOf(string[i])
    var nextLetter = ''

    if (stringIndex === 25) {
      nextLetter = alphabet[0]
    }

    if (stringIndex > 0) {
      nextLetter = alphabet[stringIndex + 1]
    }

    // We can use the indexOf method again here to check if this letter is in our
    // list of vowels
    if (vowels.indexOf(nextLetter) > 0) {
      nextLetter.toUpperCase()
    }

    result += nextLetter
  }

  return result
}

letterChanges('hello')
```

Pay close attention to the ordering of our statements here. Remember that _javascript_ is **single-threaded**, meaning it will read line by line from top to bottom.
* We first check if the string is `'z'` to cover our edge case
* Then we assign `nextLetter` as the next letter of our current letter 
* Then we check if `nextLetter` is a vowel and if it is, we capitalize it
* Then finally, we will add that letter to our result

Excellent! What have we learned from this?
* We've learned how to use an array as a hash table
* Using a hash table we can map certain values to manipulate our inputs
* We've learned the `indexOf` method
* We learned how the `toUpperCase` method
* We learned how to deal with edge cases