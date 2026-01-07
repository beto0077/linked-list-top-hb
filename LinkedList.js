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
        let counter = 0;
        let actualNode = this.head;
        while (actualNode != null) {
            if (counter === (index - 1)) {
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
}