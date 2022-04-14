// Singly Linked List Has Loop
// Some dastardly coding has left you with a loop in your singly linked list! (Meaning your while loop will run forever!) -- It's up to you to figure out if it's just a really long list or your coworker has created a loop in your list!
// Return true if a loop is found, false if one is not

// Break loop
// After identifying that a loop has been found, break itclass LinkedList {
var myList = new SLL();
myList.insertAtFront(1);
myList.insertAtFront(2);
myList.insertAtFront(1);
myList.insertAtFront(3);

var runner = myList.head;
while (runner.next != null) {
    runner = runner.next;
}
runner.next = myList.head;