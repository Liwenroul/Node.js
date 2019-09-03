//1.引入http的原生模块（自带的）
const http=require("http");
//文件操作模块
const fs=require("fs");
const url=require("url");
const path=require("path");

//2.创建一个服务器，只要http请求访问端口（此处为8082端口），就执行回调函数。
var server=http.createServer(function(req,res){
    //发起的请求，req.url表示url地址中端口（域名）之后的内容
    //url是字符串，url.parse将req.url转换为了对象，对象提取pathname得到资源路径
    var urlObj=url.parse(req.url);
    var urlPathName=urlObj.pathname;//资源路径
    //根据资源路径可决定执行那一段代码
    if(urlPathName=="/favicon.ico"){//"/favicon.ico"不在请求范围之内
        res.end();
    }
    else if(urlPathName=="/"){//"/"当前页面的资源路径
        var htmlPath=__dirname+"\\view\\index.html";//路径拼接。"\\"其中一个\为转义字符，获取文件路径（"\\"仅限于Windows操作系统）
        var htmlContent=fs.readFileSync(htmalPath);//读取文件
        htmlContent=htmlContent.toString("utf8");//转换为可读的
    }
    else if(urlPathName=="/js/index.js"){
        var jsPath=path.join(__dirname,"/js/index.js");
        var jsContent=fs.readFileSync(jsPath);//读取内容

        res.writeHead(200,"Content-Type","text/javaScript");//解析为js文件
        res.write(jsContent);
        res.end();
    }
});

//3.服务器监听一个端口（会执行回调函数）
server.listen(8081);
console.log("server is listening 8081");//提示信息

//pathname:获取资源路径，请求的是哪个资源，哪个就做出响应





