/**
 * 1、创建server，读取index.html响应到客户端显示
 * 2、在页面中发起ajax请求获取数据
 * 
 * 服务器端接收到ajax请求，去猫眼网站上爬取页面
 * 内容，
 * 使用cheerio来解析得到需要的数据，存储到
 * 数组里，响应到客户端
 * 
 * 3、在ajax回调函数中使用响应的数据，拼接到页面显示
 */

const http=require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
const https=require("https");
const cheerio=require("cheerio");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=='/'){
        var filePath=path.join(__dirname,"/素材/index.html");
        var fileContent=fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName=="/getlist"){//获取电影数据
        https.get("https://maoyan.com/films",function(resObj){
            var result="";
            resObj.on("data",function(chunk){
                result+=chunk;
            })
            resObj.on("end",function(){
                var $=cheerio.load(result);
                var movieList=[];
                $(".movie-item-title a").each(function(){
                    var movie={};
                    movie.movieId=$(this).attr("data-val");
                    movie.movieName=$(this).text();
                    // movie.movieOrange=$(this).parent().next();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                    movie.movieOrange="暂无评分";
                    }
                    else{
                        movie.movieOrange=$(this).parent().next().children("i");
                    }
                    movie.movieOrange=="暂无评分";
                    
                    movieList.push(movie);
                    console.log(movie);
                })
            })

        })
    }
    
}).listen(8082);