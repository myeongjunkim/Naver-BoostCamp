
console.log("arr1 과 arr2 의 원소를 구분자 \" \"로 하여 한 줄씩 입력해 주세요!");




const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
 
rl.on("line", (line) => {
    // input.push(line.split(' ').map(el => parseInt(el)));
    input.push(JSON.parse(line))
});
 
rl.on('close', () => {
    arr1 = input[0]
    arr1.sort(function(a,b){return a-b});    
    arr2 = input[1]
    arr2.sort(function(a,b){return a-b});

    console.log(getWinner(arr1, arr2))
    process.exit();
})


const getWinner = (arr1, arr2) => {
    let arr1Pair = checkPair(arr1); 
    let arr2Pair = checkPair(arr2);
    if (arr1Pair.maxpair == arr2Pair.maxpair) return 0;
    else if (arr1Pair.maxpair > arr2Pair.maxpair) return 1;
    else return 2;
}


const checkPair= (arr) => {
    let maxpair = 0;
    let num = 0
    for(let i=0; i<arr.length; i++){
        let pair = arr.filter(item => item === arr[i]).length;
        if(pair > maxpair){
            maxpair = pair;
            num = arr[i];
        }
    }
    return {"maxpair": maxpair, "num": num};
}