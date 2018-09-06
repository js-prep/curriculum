/**
 * CLASS PRACTICE
 * You will create a method into a class node to add a singly linked list.
 * A linked list is a type of data structure that consists of Nodes. Each Node
 has two properties in a singly linked list, a pointer referencing to the next Node
 and the value of the Node.

 * The class Node is already built out for you.
 * Create a method addLinkedList to this class that will add a new Node to
 the end of the existing chain of Nodes.
 * Reference for JS classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

 * Example:
 * const myLinkedList = new Node(5)
 * console.log(myLinkedList) // --> linkedList { value: 5, next: null }
 * myLinkedList.addLinkedList(10)
 * console.log(myLinkedList) // --> linkedList { value: 5, next: { value: 10, next: null }}
 
 * Tips/Hints:
 * Remember to use the keyword `new` to create a new instance of a class
 * This will test your ability in using objects and basic class syntax
 * Markers/Pointers/References is the key to solving this problem
 * Remember that a linked list is different from an array in that there are no indices
 * A singly linked list only point to their next node and is the only way to keep track of their values
 * 
 * Questions to ask yourself:
 * How do I loop through a linked list? Do I know the length of a given linked list? How do I know I reached the end of a linked list?
 * How do I point to X Node? 

  ** BONUS:
  ** Create a new method getLinkedList that will return a specific node within a linked list.
  ** Create a new method removeLinkedList to remove a node with the given input value from a linked list.

*/

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}