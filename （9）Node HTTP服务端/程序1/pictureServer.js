const http=require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=='/'){
        showIndex(res);
    }
    else if(pathName=='/list'){
        showList(res);
    }
    else if(pathName.indexOf("/2.jpg")>=0){
        showImg(res);
    }
    else if(pathName=='/upload' && req.method=="POST"){
        uploadFile(req,res);//接收发来的请求
    }
    else if(pathName.indexOf("/upload")>=0 && rew.method=="GET"){//具体内容响应
        var imgSrc=path.join(__dirname,pathName);
        var imgContent=fs.readFileSync(imgSrc);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imgContent);
    }
    else if(pathName=="/getlist"){
        var files=fs.readdirSync(__dirname+"\\upload");
        var fileStr=JSON.stringify(files);
        res.end(fileStr);
    }
}).listen(8000);

function showIndex(res){
    var filePath=path.join(__dirname,"/index.html");
    var fileContent=fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}

function showImg(res){
    var imgPath=path.join(__dirname,"2.jpg");
    var imgContent=fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}

function showList(res){
    var listPath=path.join(__dirname,"list.html");
    var listContent=fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(listContent);
}

function uploadFile(req,res){
    console.log("heeee");
    var dataStr="";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        var totalArr=dataStr.split("\r\n");
        console.log(dataStr);
        var bufArr=totalArr.slice(4,totalArr.length-2);
        var imgData="";
        for(var i=0;i<bufArr.length;i++){
            imgData+=bufArr[i]+"\r\n";
        }
        var buf=Buffer.from(imgData,"binary")
        var timer=(new Date()).getTime();
        fs.writeFileSync(__dirname+"\\upload\\"+timer+".png",buf,{"encoding":"binary"});
        res.end("submit sucess");
    })
}

/**
 * 地址发起http请求 get
 * 超链接 get
 * 提交表单 get post
 * ajax发起,可以使get、POST（直接无法看到数据）
 * src get
 * href get
 * 
 * get请求，向服务端传递的参数都在url里面呈现
 * http://localhost:8081/detail?newId=1&newType=2;
 * var urlObj=url.parse(req.url,true);
 * urlObj.query.newId;
 * 
 * 
 * post请求，数据存储在请求体里;提交表单
 * req.on("data",function(){})
 * req.on("end",function(){})
 */