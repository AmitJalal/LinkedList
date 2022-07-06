class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const linkedList = new LinkedList(10)
linkedList.append(5)
linkedList.append(20)
linkedList.prepend(20)
console.log(linkedList);