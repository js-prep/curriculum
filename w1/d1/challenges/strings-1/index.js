/*
  # Manipulating Strings
  Create a function reverseString that takes in a string as an argument
  and returns the string in reversed order.

  Example:
  firstReverse('hello') --> output: 'olleh'
  firstReverse('I love code')  --> 'edoc evol I'
*/

/*
  # Manipulating Numbers
  Create a function factorial that takes in a number as an argument
  and returns the factorial of it. For example, the factorial of 4
  is (4 * 3 * 2 * 1) = 24.

  ** Assume the argument will always be a non-negative number.

  Example:
  factorial(4) --> 24
  factorial(8)  --> 40320
  factorial(0) --> 1
  factorial(1) --> 1
*/

/*
  # Manipulating Strings 2
  Create a function longestWord that takes in a string as an argument
  and returns the longest word from the sentence.

  ** Assume the string.length > 1
  ** Assume there will be no punctuation or special characters in the string
  ** If there are two or more longest words, return the word that appears first in the string

  Example:
  longestWord('I am the longest word') --> 'longest'
  longestWord('I love coding') --> 'coding'
  longestWord('hello world') --> 'hello'
*/

/*
  # Manipulating Strings 3
  Create a function letterChanges that takes a string paramter and returns
  a new string based on the following algorithm:

  1. Replace every letter in the string with the next letter in the alphabet
  (ie. 'a' becomes 'b', 'c' becomes 'd', 'z' becomes 'a')
  2. Then, if the new string is a vowel, capitalize it
  (ie 'a' becomes 'A', 'o' becomes 'O')

  ** Special characters, spaces and numbers will not be converted and still should be included in the final ouput

  Example:
  letterChanges('hello*3') --> 'Ifmmp*3'
  letterChanges('fun times!') --> 'gvO Ujnft!'
*/


/*
  # Manipulating Numbers 2
  Create a function simpleAdding that takes in a number as an argument and
  returns the added number from 1 to num.

  For example: If the input is 4, your algorithm should return (1 + 2 + 3 + 4) = 10

  Example:
  simpleAdding(4) --> 10
  simpleAdding(12) --> 78
  simpleAdding(140) --> 9870
  simpleAdding(0) --> 0
  simpleAdding(1) --> 1
*/

/*
  # Manipulating Strings 4
  Create a function capitalizeWord that takes in a string as an argument
  and returns a string that capitalizes the first letter in every word

  ** Assume there will be no special characters or punctuations

  Example:
  capitalizeWord("hello world") --> "Hello World"
  capitalizeWord("i love coding") --> "I Love Coding"
*/

/*
  # Manipulating Numbers 3
  Create a function compareNumbers that takes in 2 numbers as arguments and
  returns true if the second number is greater than the first number, otherwise
  return false.
  If the numbers are equal to each other return 'equal'

  Example:
  compareNumbers(1, 23) --> true
  compareNumbers(20, 5) --> false
  compareNumbers(3, 4) --> true
  compareNumbers(10, 10) --> 'equal'
*/

/*
  # Manipulating Numbers 4

  Final problem of the week!
  This is going to test your ability to separate problems into multiple steps 
  to come up w/ your solution. Sometimes a problem can be daunting but
  if you break it up into smaller steps, each problem can seem as simple as
  the problems you've been solving this week. So before you jump into code,
  spend like 3-5 minutes trying to identify the steps needed to solve this problem.

  Create a function convertMinutes that takes in a number parameter that will
  represent minutes (ie. 86 will equal 86 minutes). You will return the 
  passed argument converted into hours and minutes in this format (hours:minutes)
  as a string

  For example, if (num = 63, then the ouput should be '1:3')

  Examples:
  convertMinutes(126) --> "2:6"
  convertMinutes(45) --> "0:45"
  convertMinutes(1) --> "0:1"
  convertMinutes(360) --> "6:0"
*/

/*
Objective: Write the instructions for the given function (greaterThanOrLessThan)
so that if the input (string) is greater than 5, it will return
the string 'Greater than 5', otherwise return 'Less than or equal to 5'

The function declaration is already created for you, just fill in the
instructions for the function and you create your own arguments.

How can we tell javascript how long a string is?

HINT use if / else statement and the .length method.
*/

function greaterThanOrLessThan(string) {
  /* DO SOMETHING HERE */
}

greaterThanOrLessThan()

/*
Objective: Write the instructions for the given function (printLetters) so
that when called, the function will print every letter in the given string input
individually

How can we tell Javascript to loop through a string?

HINT: use the console.log() method to print and a for statement to loop through the argument

The function is already created for you, provide an input to the argument to test your function
*/

function printLetters(string) {
  /* DO SOMETHING HERE */
}

printLetters()