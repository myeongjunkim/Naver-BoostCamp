
console.log("arr1 과 arr2 의 원소를 구분자 \" \"로 하여 한 줄씩 입력해 주세요!");

const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    input.push(line.split(' ').map(el => parseInt(el)));
});
 
rl.on('close', () => {
    arr1 = input[0]
    arr1.sort(function(a,b){return a-b});    

    arr2 = input[1]
    arr2.sort(function(a,b){return a-b});

    process.exit();
})



