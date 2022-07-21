
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


    malloc = (type, count) => {
        if(type in Object.keys(this.typeList)) {
            
        } else throw new Error("등록되지 않은 자료형입니다. setSize 메서드를 통해 자료형을 등록해주세요");
    }

    free = (pointer) => {

    } 

    call = (name, paramCount) => {

    }

    returnFrom = (name) => {

    }



    usage = () => {
        // 스택 영역 전체크기, 사용중인 용량, 남은 용량, 힙 영역 전체크기, 사용중인 용량, 남은 용량을 순서대로 배열로 리턴한다.
    }



    callstack = () => {

    }



    heapdump = () => {
        // 힙영역에서 사용중인 상태를 문자열 배열로 표현해서 리턴한다.

        // 힙 영역에 정보는 타입과 크기, 해당 주소를 참조하는 스택 포인터 변수 정보도 포함한다.
    }



    garbageCollect = () => {
        // 힙영역에 할당된 타입들 중에서 스택에 포인터 변수가 없는 경우를 찾아서 해제하는 동작을 한다.

    }


    reset = () => {
        // 모든 stack과 heap 공간을 비우고 init했을 때와 동일하게 초기상태로 만든다.

    }




}