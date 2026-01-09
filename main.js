import { LinkedList } from "./LinkedList.js";

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

// function printTest(list) {
//     let next = list.head;
//     while (next != null) {
//         console.log(`Node => ${next.value}`);
//         const otherNode = next.nextNode;
//         next = otherNode;
//     }
// }
console.log(list.toString());
console.log("Test size function >>")
console.log(list.size)
console.log("Test head function >>")
console.log(list.head)
console.log("Test tail function >>")
console.log(list.tail)
console.log("Test at function >>")
console.log("At index 4 =>")
console.log(list.at(4))
console.log("At index 37 =>")
console.log(list.at(37))
console.log("Test pop function >>")
console.log("Node removed =>")
console.log(list.pop())
console.log(`New tail =>`)
console.log(list.tail)
console.log(`New size => ${list.size}`)
console.log(`New list =>`)
console.log(list.toString());
console.log("Test contains function >>")
console.log(`Contains dog? ${list.contains("dog")}`)
console.log(`Contains ball? ${list.contains("ball")}`)
console.log("Test find function >>")
console.log(`Find dog => ${list.find("dog")}`)
console.log(`Find ball => ${list.find("ball")}`)
console.log("Test toString function >>")
console.log(list.toString());

//Tests for extra features
console.log("Tests for extra features");
console.log(list.toString());
console.log(list.head)
console.log(list.size)
console.log(list.tail)
console.log("Test insertAt function >>")
console.log(`insertAt(1, "potato", "apple", "banana") =>`)
list.insertAt(1, "potato", "apple", "banana");
console.log(list.toString());
console.log(list.head)
console.log(list.size)
console.log(list.tail)
console.log("Test removeAt function >>")
console.log(`removeAt(6) =>`)
list.removeAt(6)
console.log(list.toString());
console.log(list.head)
console.log(list.size)
console.log(list.tail)