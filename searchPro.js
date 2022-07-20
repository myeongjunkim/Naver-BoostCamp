import { parsing } from "./crawling_module.mjs";
import { Cache } from "./cache_module.mjs";




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