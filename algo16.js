algo19.s// Today we will be removing the front and back nodes of the SLL using the functions found at the bottom

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToFront(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    addToBack(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
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

    // Use removeFront() to remove the head of the linked list and return its value
    // HINTS: 
    // this needs to be in a certain order, what would happen if you set this.head's value to null first?
    // or what would happen if you only set the new head and that's it?  
    // this.head's value needs to change
    // The connection between the old head and new head needs to be severed
    // You may want to save the current head into a temporary variable and then do your magic
    // If you get done early try and handle the edge cases if the linked list only has one or zero nodes


    removeFront() {
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
    }



    // Use removeBack() to remove the tail of the linked list and return its value
    // HINTS: 
    // Think about how can we get to the end of the list and how can we tell which one is the 2nd to last?
    // This needs to be in a certain order as well
    // Save the value of the old tail so you can return it  
    // A new tail should be marked
    // The connection between the old tail and new tail needs to be severed
    // You may want to save the current tail into a temporary variable and then do your magic
    // If you get done early try and handle the edge cases if the linked list only has one or zero nodes


    removeBack() {
        var runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        this.tail = runner;
        this.tail.next = null;
    }
}

var new_sll = new SinglyLinkedList();
new_sll.addToBack("Disneyland");
new_sll.addToBack("Las Vegas");
new_sll.addToBack("Mount Rushmore");
new_sll.addToBack("Times Square");
console.log(new_sll.display());

console.log(new_sll.removeFront())
console.log(new_sll.display());

console.log(new_sll.removeBack())
console.log(new_sll.display());

