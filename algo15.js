// Singly Linked Lists - Contain nodes with a beginning (head) node and they have an order and end with a tail node
// --the head node and tail node are both set to null when the list is empty
// They are unlike arrays because the nodes don't have index positions, they just point to each other anywhere in memory
// --inserting and deleting items in SLL is faster since you don't have to shift every item like you would have to in an array
// It's like destinations to get somewhere on a map, the locations can be all over the place but they are connected
// You have to know where the start (head) is and where we end (tail) and all the stops in-between (the other nodes)
// The head and tail node can be any of the nodes you define, they are just marked as the head/tail
// Other example: conga-line: people (nodes), 1st person (head), last person (tail)
// Other example: train: boxcars (nodes), 1st car in train (head), last boxcar (tail)

// This is the class that will be creating the node instances that we will connect together  
// Each node will have a value and a next property so we know which node it's connected to
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

// Here's an example of the nodes being created and adding nodes to them in a certain order (uncomment to see):
// var disney = new ListNode("Disneyland");
// console.log(disney)

// var vegas = new ListNode("Las Vegas");
// disney.next = vegas;
// console.log(disney)

// var yellow = new ListNode("Yellowstone");
// vegas.next = yellow;
// console.log(disney);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Use addToFront(value) to add a node with the received value to the head (beginning) of the list
    // Steps:
    // 1. Create a new node 
    // 2. Attach the new node to the head of the list
    // 3. Set it to be the new head
    addToFront(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        // otherwise
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    // Use addToBack(value) to add a node with the received value to the tail (end) of the list
    // Steps:
    // 1. Create a new node 
    // 2. Attach the new node to the tail of the list 
    // 3. Set it to be the new tail
    addToBack(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

    // Use containes(value) to return true if value received is in the linked list, as a node value, or return false
    // Steps: 
    // 1. Create a runner that starts at the head
    // 2. While loop that goes until the runner encounters null 
    // 3. If we find the value in one of the nodes, return true
    // 4. If we don't go to the next node using runner.next()
    contains(target) {
        var runner = this.head;

        while (runner != null) {

            if (runner.value == target) {
                return true;
            }

            runner = runner.next;
        }

        return false;
    }
    
    // Use display() to return a string with the value of every node from the linked list 
    // Example: After adding to front and back it could look something like this (this is just an example):
    //          "Disneyland" - "Las Vegas" - "Yellowstone" - "Mount Rushmore" - "Gateway Arch"
    // I've given this to you so you can use it to test and it will help you with the contains method as well (:
    display() {

        if (this.head == null) {
            return null;
        }

        var values = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            values += " - " + runner.value;
            runner = runner.next;
        }

        return values;
    }
}

var new_sll = new SinglyLinkedList();
new_sll.addToFront("Disneyland");
console.log(new_sll.display());

new_sll.addToFront("Las Vegas");
console.log(new_sll.display());

new_sll.addToBack("Gateway Arch");
console.log(new_sll.display());

new_sll.addToBack("Coca Cola Museum");
console.log(new_sll.display());

console.log(new_sll.contains("Las Vegas"));
console.log(new_sll.contains("Mount Rushmore"));
console.log(new_sll.contains("Statue of Liberty"));
console.log(new_sll.contains("Disney World"));

