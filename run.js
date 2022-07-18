
console.log("arr1 과 arr2 의 원소를  \"[1, 2, 3, 4,,,]\" 형태로 하여 한 줄씩 입력해 주세요!(입력후 ctrl + c)");


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
    // let arr1Straight = checkStraight(arr1); let arr2Straight = checkStraight(arr2); 
    // let arr1Pair; let arr2Pair;
    
    // if (arr1Straight == 0) {arr1Pair = checkPair(arr1);}
    // else  {arr1Pair = arr1Straight;}

    // if (arr2Straight == 0) {arr2Pair = checkPair(arr2);}
    // else  {arr2Pair = arr2Straight;}
     
    let arr1Pair = checkPair(arr1); let arr2Pair = checkPair(arr2); 

    // console.log(arr1Pair.maxpair, arr1Pair.num);
    // console.log(arr2Pair.maxpair, arr2Pair.num);

    if (arr1Pair.maxpair == arr2Pair.maxpair){
        if (arr1Pair.num > arr2Pair.num) return 1;
        else if (arr1Pair.num < arr2Pair.num) return 2;
        else return 0;
    }
    else if (arr1Pair.maxpair > arr2Pair.maxpair) return 1;
    else return 2;
}

const checkStraight = (arr) => {
    let partArr = [];
    for (let i=0; i<=arr.length-5; i++){
        console.log([...Array(5).keys()].map(key => key + i+1).toString());
        console.log(arr.slice(i, i+5).toString());
        if ([...Array(5).keys()].map(key => key + i+1).toString() == arr.slice(i, i+5).toString()) {
            console.log()
            partArr = arr.slice(i, i+5);
        }
    }
    if (partArr.length == 0) return 0;
    else return {"maxpair": 3.5, "num": partArr[4]};
}

const checkPair= (arr) => {
    let maxpair = 0; let num = 0
    for(let i=0; i<arr.length; i++){
        let pair = arr.filter(item => item === arr[i]).length;
        if(pair >= maxpair && pair != 1){
            maxpair = pair;
            num = arr[i];
        }
    }
    return {"maxpair": maxpair, "num": num};
}
