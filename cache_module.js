
import { parsing } from "./crawling_module.mjs";


// main idea -> 캐시에는 오래된 순서대로 데이터 정렬(0번 인덱스에 가장 오래된 데이터)
const cache = (maxList,maxDataLen) => {
    this.dataList = [];
    this.get = async(keyword) => {
        let index = await isKeyword(keyword)
        if(index>=0){   //캐시 내부에 이미 요소가 있는 경우
            let targetData = dataList[index];
            targetData.hitCount++;
            this.dataList.splice(index,1);
            this.dataList.push(targetData); // 최신화
            return targetData;
        } else{ // 캐시 내부에 요소가 없는 경우 -> set 으로 진행하도록
            return 0;
        }
    }
    this.set = async(keyword) => {

        let newDataList = await parsing(keyword);
        if (newDataList.length > maxDataLen){
            newDataList.length = maxDataLen;
            console.log("데이터 최대개수 초과");
        }

        let dataSet = {
            keyword : newDataList,
            "hitCount" : 1
        }
        if (this.dataList.length == maxList){
            this.dataList.splice(0,1);   
        }
        this.dataList.push(dataSet);

        return dataSet;
    }
}

const isKeyword = async(dataList, keyword) => {
    dataList.forEach((data, i) =>{
        if(data.keyword == keyword) return i;
    })
    return -1;
}


let dataSet = {
    "keyword" : [
        {
            "title" : "title",
            "url" : "url",
            "contetn" : "content"
        },
        {
            "title" : "title",
            "url" : "url",
            "contetn" : "content"
        },
    ],
    "hitCount" : 0
}