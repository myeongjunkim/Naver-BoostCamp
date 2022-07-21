
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


    setSize = (type, length) => {

        if(type in Object.keys(this.typeList)) throw new Error("이미 존재하는 자료형입니다.");
        else if([1,2,4,8,16,32].includes(length)) this.typeList[type] = length;
        else throw new Error("자료형의 크기는 1,2,4,8,16,32 중 하나만 가능합니다.");
    }


   




}