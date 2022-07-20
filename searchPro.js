import { Cache } from "./cache_module.mjs";

const printDataSet = (dataSet) => {
    dataSet.dataList.forEach((data, idx) => {
        console.log("\n");
        console.log("결과"+(idx+1)+".제목 : " + data.title + "\n");
        console.log("결과"+(idx+1)+".링크 : " + data.url+ "\n");   
        console.log("결과"+(idx+1)+".미리보기 : " + data.content+ "\n");
    });

}


let LRUcache = new Cache(5, 10);

const searchMain = async(keyword) => {

    if(keyword == "$cache"){
        LRUcache.cacheList.forEach((dataSet)=>{
            process.stdout.write(dataSet.keyword + "(" + dataSet.hitCount + ") ");
        });
        console.log("\n\n");

    } else {
        let getDataSet = await LRUcache.get(keyword);
       

        if (getDataSet == 0){
            let dataSet = await LRUcache.set(keyword);
            printDataSet(dataSet);
            
        } else {
            console.log("(본 검색 결과는 캐시에 저장된 내용을 표시합니다.)");
            printDataSet(getDataSet);
        }
    } 
    
    
}



// 입력 문제를 해결하지 못해 반복하여 키워드 검색

await searchMain("apple");
await searchMain("naver");
await searchMain("daum");
await searchMain("apple");
await searchMain("daum");
await searchMain("naver");
await searchMain("google");
await searchMain("kakao");
await searchMain("naver");
await searchMain("토스");
await searchMain("쿠팡");


await searchMain("$cache");




// get 기능 구현
// console.log(await LRUcache.get("쿠팡"));

// set 기능 구현
// await LRUcache.set("배달의 민족");
// await searchMain("$cache");
