import Memory from './memory.mjs';  



let mem = new Memory();

mem.init(10, 10);

console.log("setSize")
mem.setSize("int", 4);
mem.setSize("str", 8);
console.log(mem.typeList)

mem.setSize("boolean", 7);


