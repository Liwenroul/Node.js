//1.引入http原生模块
const http = require("http");//http原生模块（自带的）
//文件操作的模块
const fs=require("fs");
//用于文件的处理和路径的处理
const path=require("path");
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候，才会执行回调函数李的内容
    var  htmlPath=path.join(__dirname+"/view/index.html")//path.join()识别操作系统，来转换分隔符
    var htmlContent=fs.readFileSync(htmlPath);//读取文件
    htmlContent=htmlContent.toString("utf8");//转换为可读的
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
//3.服务监听一个端口(会执行回调函数)
server.listen(8082);
console.log("server is listening 8082");//提示信息