
import { parsing } from "./crawling_module.mjs";


// main idea -> 캐시에는 오래된 순서대로 데이터 정렬(0번 인덱스에 가장 오래된 데이터)
let Cache = function(maxList, maxDataLen) {
    this.cacheList = [];
    this.get = async(keyword) => {
        let index = await isKeyword(this.cacheList, keyword)
        // console.log(index); 
        // index == -1 : set 해야되는 상황
        if(index>=0){   //캐시 내부에 이미 요소가 있는 경우
            let targetDataSet = this.cacheList[index];
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

const isKeyword = async(cacheList, keyword) => {
    
    //  반복문 비동기처리
    for (const [index, dataSet] of cacheList.entries()) {
        if(await dataSet.keyword === keyword) return index;
    }
    return -1;
}

export { Cache };



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

