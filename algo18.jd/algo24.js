// Singly Linked List Flatten Children
// Given a Singly Linked List that may contain nodes with children, return a flattened version of the list
// Ex: given 1 -> 2 -> 3    ->  4 -> 5
//                |             |
//                1 -> 2 -> 3   2 -> 3
// Return a list like so: 1 -> 2 -> 1 -> 2 -> 3 -> 3 -> 4 -> 2 -> 3 -> 5

// Singly Linked List Unflatten Children
// Given a Singly Linked List that may have flattened children, unflatten it back to its original state populateChildren(){     
let runner = this.head;
while (runner) {
    let numChildren = Math.floor(Math.random() * 5);
    if (numChildren !== 0) {
        let childList = new SLL();
        for (let i = 0; i < numChildren; ++i) {
            childList.insertAtFront(Math.floor(Math.random() * 50));
        }
        runner.child = childList;
    }
    runner = runner.next;
}

printWithChildren(){
    let returnStr = "";
    let runner = this.head;
    while (runner) {
        returnStr += `${runner.value}`;
        if (runner.child) {
            returnStr += " (";
            let runner2 = runner.child.head;
            while (runner2) {
                returnStr += `${runner2.value} ${runner2.next ? " -> " : ")"} `;
                runner2 = runner2.next;
            }
        }
        if (runner.next) {
            returnStr += " -> ";
        }
        runner = runner.next;
    }
    console.log(returnStr);
    return returnStr;
}
flatten(){
    let runner = this.head;
    while(runner){
        let next = runner.next;
        if(runner.child){
            runner.next = runner.child.head;
            let child_runner = runner.child.head;
            while(child_runner.next){
                
                child_runner = child_runner.next;
            }
            child_runner.next = next;

        }
        runner = runner.next;
    }
}
flattenChildren() {
    let runner = this.head;

    while (runner) {
        let temp = runner.next;
        if (runner.child != null) {
            runner.next = runner.child.head;
            let childRunner = runner.child.head;
            while (childRunner.next != null) {
                childRunner = childRunner.next;
            }
            childRunner.next = temp;
            runner.child = null;
        }
        runner = temp;
    }
}

displayWithChildren() {
    // Create a return string
    let returnString = "";
    // Create a runner
    let runner = this.head;
    // While the runner is not null
    while (runner !== null) {
        // Add the value to the return string
        returnString += runner.value + " -> ";
        // If the runner has a child
        if (runner.child !== null) {
            // Add parentheses around childList
            returnString += "( ";
            // Add the child to the return string
            returnString += runner.child.displayWithChildren();
            // Close the parentheses
            returnString += ") ";
        }
        // Set the runner to the next node
        runner = runner.next;
    }
    // Return the return string
    return returnString;
}