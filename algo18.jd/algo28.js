// Binary Search Trees

// Node
class BNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

// Binary Search Tree class
class BST {
    constructor() {
        // Just like with head or tail we can't assume there is a value already so we start it at null
        this.root = null;
    }
    // Checking to see if the tree is empty
    isEmpty() {
        return this.root == null;
    }

    // Add to tree
    // Case 1: there is nothing in the tree -> then the value to add becomes the root
    // Case 2: this is something, so we have to figure out which direction to go
    // Ask which direction to go, we need a while loop to allow us to keep asking this question until we hit a null
    // Assuming we are passing a numeric value in, NOT a node
    add(newVal) {
        const node = new BNode(newVal);
        // First, check if it's empty
        if (this.isEmpty()) {
            this.root = node;
        } else {
            let runner = this.root;
            while (true) {
                // check if the value is smaller
                if (runner.value > newVal) {
                    // Need to check if there is null to the left
                    if (runner.left == null) {
                        runner.left = node;
                        return this;
                    }
                    // We need to go to the left
                    runner = runner.left;
                } else {
                    // runner is SMALLER than our value
                    // Need to check if there is null to the right
                    if (runner.right == null) {
                        runner.right = node;
                        return this;
                    }
                    // we need to go to the right
                    runner = runner.right;
                }
            }
        }
    }

    // How would we get the smallest value from this BST?
    min() {
        // the value is located at the very bottom left
        // Need a while loop to take us down to the leftmost value
        // Edge case: there is nothing in the tree, therefore there is no leftmost value
        if (this.isEmpty()) {
            return null;
        } else {
            let runner = this.root;
            while (runner.left) {
                runner = runner.left;
            }
            return runner.value;
        }
    }

    max() {
        if (this.isEmpty()) {
            return null;
        } else {
            let runner = this.root;
            while (runner.right) {
                runner = runner.right;
            }
            return runner.value;
        }
    }
    // Contains
    // Given a value to search for, return true if the value IS found in the binary search tree and false if it is not

    // Size
    // Return how many values are inside a binary search tree
    contains(newVal) {
        if (this.isEmpty()) {
            return false;
        } else {
            let runner = this.root;
            while (true) {
                if (runner.value == newVal) {
                    return true;
                }
                if (runner.value > newVal) {
                    if (runner.left == null) {
                        return false;
                    }
                    runner = runner.left;
                } else {
                    if (runner.right == null) {
                        return false;
                    }
                    runner = runner.right;
                }
            }
        }
    }

    size(node = this.root) {
        if (node == null) {
            return 0;
        }
        return this.size(node.left) + this.size(node.right) + 1;
    }

    // BST Height
    // Write a function for your BST that returns how tall (the length of the longest running branch) your tree is

    // BST isBalanced
    // Write a function for your BST that returns true or false whether the tree is balanced, meaning the height of the left side of the tree is equal to or one branch height different from the right side  


    maxHeight(node = this.root) {
        if (node == null) {
            return 0;
        }
        var leftHeight = this.maxHeight(node.left) + 1;
        var rightHeight = this.maxHeight(node.right) + 1;
        if (leftHeight > rightHeight) {
            return leftHeight
        } else {
            return rightHeight
        }
    }
    isBalanced(node = this.root) {
        if (!node) {
            return true;
        }

        if (Math.abs(this.maxHeight(node.left) - this.maxHeight(node.right)) > 1) {
            return false;
        }

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
    // BST isFull
    // Return true or false whether your BST is full. A full tree is one where every node has either two children or no children. If any nodes have only one child, it is NOT a full tree


    isFull(node = this.root) {
        if (node == null) {
            return false;
        }
        if (this.isFull(node.left) == null && this.isFull(node.right) == null) {
            return true;
        } 
        if (this.isFull(node.left) != null || this.isFull(node.right) == null) {
            return false
        }
        if (this.isFull(node.left) == null || this.isFull(node.right) != null) {
            return false
        }
    }
}
var tree = new BST();
tree.add(15);
tree.add(10);
tree.add(20);
tree.add(30);
tree.add(5);
tree.add(45);
console.log(tree.contains(5));
console.log(tree.contains(51));
console.log(tree.contains(15));
console.log(tree.contains(11));
console.log(tree.size());
console.log(tree.maxHeight());
console.log(tree.isFull());