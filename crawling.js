
// html 가져오기
const axios = require('axios');

// 파싱하기
const cheerio = require('cheerio');


const getHTML = async(keyword) => {
    try{ 
        // return await axios.get("https://www.google.com/search?q=" + encodeURI(keyword));
        return await axios.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + encodeURI(keyword));
        
    } catch(err) {
        console.log(err);
    }
}



const parsing = async(keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $searchList = $(".bx");

    let dataList = [];
    let data = {};
    $searchList.each((idx, bx) =>{
        data = {};
        const title = $(bx).find('.total_tit').text();
        const url = $(bx).find('.link_tit').attr('href');
        data.title = title;
        data.url = url;
        console.log(data);
        dataList.push(data);
    });

    console.log(dataList);

}


parsing("apple");