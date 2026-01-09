import { Node } from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // append(value) adds a new node containing value to the end of the list
    append(value) {
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            this.size++;
        } else {
            if (this.size === 1) {
                this.head.nextNode = node;
                this.tail = node;
                this.size++;
            } else {
                const tempNode = this.tail;
                tempNode.nextNode = node;
                this.tail = node;
                this.size++;
            }
        }
    }
    // prepend(value) adds a new node containing value to the start of the list
    prepend(value) {
        const node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            this.size++;
        } else {
            if (this.size === 1) {
                this.head = node;
                this.head.nextNode = this.tail;
                this.size++;
            } else {
                const tempNode = this.head;
                this.head = node;
                this.head.nextNode = tempNode;
                this.size++;
            }
        }
    }
    // size returns the total number of nodes in the list
    size() {
        return this.size;
    }
    // head returns the first node in the list
    head() {
        return this.head;
    }
    // tail returns the last node in the list
    tail() {
        return this.tail;
    }
    // at(index) returns the node at the given index
    at(index) {
        let counter = 1;
        let actualNode = this.head;
        while (actualNode != null) {
            if (counter === index) {
                return actualNode;
            }
            const next = actualNode.nextNode;
            actualNode = next;
            counter++;
        }
        return "Node not found in the provided index.";
    }
    // pop removes the last element from the list
    pop() {
        if (this.head == null) {
            return null;
        } else {
            const nodeRemoved = this.tail;
            let counter = 1;
            let actualNode = this.head;
            while (actualNode != null) {
                if (counter === (this.size - 1)) {
                    actualNode.nextNode = null;
                    this.tail = actualNode;
                    this.size--;
                    return nodeRemoved;
                }
                const next = actualNode.nextNode;
                actualNode = next;
                counter++;
            }
        }
    }
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let actualNode = this.head;
        while (actualNode != null) {
            if (actualNode.value === value) {
                return true;
            }
            const next = actualNode.nextNode;
            actualNode = next;
        }
        return false;
    }
    // find(value) returns the index of the node containing value, or null if not found.
    find(value) {
        let counter = 1;
        let actualNode = this.head;
        while (actualNode != null) {
            if (actualNode.value === value) {
                return counter;
            }
            const next = actualNode.nextNode;
            actualNode = next;
            counter++;
        }
        return null;
    }
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
        let actualNode = this.head;
        let returnedList = "";
        while (actualNode != null) {
            returnedList += `( ${actualNode.value} )`;
            returnedList += " -> ";
            const next = actualNode.nextNode;
            actualNode = next;
        }
        returnedList += " null";
        return returnedList;
    }

    // Extra functions
    // insertAt(index, ...values) should insert new nodes with the given values at the given index.
    check(index) {
        if (!(index >= 1 && index <= this.size)) {
            throw new RangeError(`The argument must be between 1 and ${this.size}.`);
        }
    }
    insertAt(index, ...values) {
        try {
            this.check(index)
            let counter = 1;
            let actualNode = this.head;
            while (actualNode != null) {
                if (counter === (index - 1) || index === 1) {
                    let insertedNode = null;
                    let nodeAfterInsertion = actualNode.nextNode;
                    values.forEach(value => {
                        const node = new Node(value);
                        if (index === this.size) {
                            nodeAfterInsertion.nextNode = node;
                            insertedNode = node;
                            this.size++;
                        } else if (counter === 1 && index === 1) {
                            this.head = node;
                            insertedNode = node;
                            this.size++;
                            counter++;
                        } else {
                            if (insertedNode == null) {
                                actualNode.nextNode = node;
                            } else {
                                insertedNode.nextNode = node;
                            }
                            insertedNode = node;
                            this.size++;
                        }
                    });
                    if (this.tail.nextNode != null) {
                        this.tail = insertedNode;
                    } else {
                        insertedNode.nextNode = index === 1 ? actualNode : nodeAfterInsertion;
                    }
                    return true;
                }
                const next = actualNode.nextNode;
                actualNode = next;
                counter++;
            }
        } catch (error) {
            if (error instanceof RangeError) {
                console.error("Caught a RangeError:", error.message);
            } else {
                // Re-throw other, unexpected errors
                throw error;
            }
        }
    }
    // removeAt(index) that removes the node at the given index.
    removeAt(index) {
        try {
            this.check(index)
            let counter = 1;
            let actualNode = this.head;
            while (actualNode != null) {
                if (counter === (index - 1) || index === 1) {
                    let nodeRemoved = null;
                    let nodeAfterRemoval = actualNode.nextNode;
                    if (index === this.size) {
                        nodeRemoved = actualNode.nextNode;
                        actualNode.nextNode = null;
                        this.tail = actualNode;
                        this.size--;
                    } else if (counter === 1 && index === 1) {
                        nodeRemoved = actualNode;
                        this.head = actualNode.nextNode;
                        this.size--;
                    } else {
                        nodeRemoved = actualNode.nextNode;
                        actualNode.nextNode = nodeRemoved.nextNode;
                        this.size--;
                    }
                    return nodeRemoved;
                }
                const next = actualNode.nextNode;
                actualNode = next;
                counter++;
            }
        } catch (error) {
            if (error instanceof RangeError) {
                console.error("Caught a RangeError:", error.message);
            } else {
                // Re-throw other, unexpected errors
                throw error;
            }
        }
    }
}