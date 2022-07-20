
import { parsing } from "./crawling_module.mjs";


// main idea -> 캐시에는 오래된 순서대로 데이터 정렬(0번 인덱스에 가장 오래된 데이터)
let Cache = function(maxList, maxDataLen) {
    this.cacheList = [];
    this.get = (keyword) => {
        let index = isKeyword(this.cacheList, keyword)
        if(index>=0){   //캐시 내부에 이미 요소가 있는 경우
            let targetDataSet = cacheList[index];
            targetDataSet.hitCount++;
            this.cacheList.splice(index,1);
            this.cacheList.push(targetDataSet); // 최신화
            return targetDataSet;
        } else{ // 캐시 내부에 요소가 없는 경우 -> set 으로 진행하도록
            return 0;
        }
    }
    this.set = async(keyword) => {

        let newDataList =  await parsing(keyword);
        // console.log(newDataList);
        if (newDataList.length > maxDataLen){
            newDataList.length = maxDataLen;
            console.log("데이터리스트 최대개수 초과");
        }

        let dataSet = {
            "keyword" : keyword,
            "dataList" : newDataList,
            "hitCount" : 1
        }
        if (this.cacheList.length == maxList){
            this.cacheList.splice(0,1);   
        }
        this.cacheList.push(dataSet);

        return dataSet;
    }
}

const isKeyword = (cacheList, keyword) => {
    cacheList.forEach((dataSet, i) =>{
        if(dataSet.keyword == keyword) return i;
    })
    return -1;
}





const printDataSet = (dataSet) => {
    dataSet.dataList.forEach((data, idx) => {
        console.log("\n\n");
        console.log("결과"+(idx+1)+".제목 : " + data.title + "\n");
        console.log("결과"+(idx+1)+".링크 : " + data.url+ "\n");   
        console.log("결과"+(idx+1)+".미리보기 : " + data.content+ "\n");
        console.log("\n");   
    });

}






let LRUcache = new Cache(5, 10);

const searchMain = async(keyword) => {

    if(keyword == "$cache"){
        LRUcache.cacheList.forEach((dataSet)=>{
            process.stdout.write(dataSet.keyword + "(" + dataSet.hitCount + ") ");
        });
        console.log("\n\n");

    } else if (LRUcache.get(keyword) == 0){
        let dataSet = await LRUcache.set(keyword);
        // console.log(dataSet);
        printDataSet(dataSet);
        
    } else {
        console.log("(본 검색 결과는 캐시에 저장된 내용을 표시합니다.)");
        let dataSet = LRUcache.get(keyword);
        printDataSet(dataSet);
    }
}

await searchMain("apple");


// let dataSet = {
//     "keyword" : 'keyword',
//     "dataList" : [ // dataList
//         {
//             "title" : "title",
//             "url" : "url",
//             "contetn" : "content"
//         },
//         {
//             "title" : "title",
//             "url" : "url",
//             "contetn" : "content"
//         },
//     ],
//     "hitCount" : 0
// }

