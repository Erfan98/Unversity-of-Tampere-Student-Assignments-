// Task One Start

const express =require('express')
const cheerio =require('cheerio');
const  request  = require('request');
const { response } = require('express');
var app=express();
app.get('/',(req,res)=>{
    var url="http://aws.random.cat/meow";


    // request(url,(error,response,html)=>{
    //     if(!error){
    //         var $ = cheerio.load(html);
    //         var imagesrc=$("#cat").attr('src')
    //         console.log(imagesrc);
    //     } 
    // });

    var link=request(url,response.links())

    console.log(link);
})
//Task one End

app.listen(4000)
