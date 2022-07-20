
import axios from "axios";
import cheerio from "cheerio";

// html 가져오기
// const axios = require('axios');

// 파싱하기
// const cheerio = require('cheerio');


const getHTML = async(keyword) => {
    try{ 
        return await axios.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + encodeURI(keyword));
        
    } catch(err) {
        console.log(err);
    }
}

const parsing = async(keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $searchList = $(".bx .total_wrap");

    let dataList = [];
    let data = {};
    $searchList.each((i, bx) =>{
        data = {};
        const title = $(bx).find('.total_tit').text();
        const url = $(bx).find('.link_tit').attr('href');
        const content = $(bx).find('.api_txt_lines.dsc_txt').text();
        
        data.title = title;
        data.url = url;
        data.content = content;

        dataList.push(data);
    });
    
    return dataList;
}



export { parsing };


