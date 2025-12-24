import { LinkedList } from "./LinkedList.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("cow");
list.prepend("tiger");
list.prepend("lion");

function printTest(list) {
    let next = list.head;
    while (next != null) {
        console.log(`Node => ${next.value}`);
        const otherNode = next.nextNode;
        next = otherNode;
    }
}

printTest(list);
console.log(list.at(4))
console.log(list.at(37))
// console.log(list);
