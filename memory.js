
class Stack {
    constructor(stackSize) {
        this.arr = new Array();
        this.maxSize = stackSize;
        this.size = 0;
        this.pointer = 0;
    };
}


class Memmory {

    // constructor() {
    //     this.baseAdress;
    //     this.typeList = {}
    // }

    init = (stackSize, heapSize) => {
        this.baseAdress = 0;
        this.typeList = {};
        this.stack = new Stack(stackSize);
        this.heap = {};
        this.heapSize = 0;
        this.maxHeapSize = heapSize;
        return this.baseAdress;
    }




}