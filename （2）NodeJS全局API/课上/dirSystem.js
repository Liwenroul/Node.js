//不同操作系统的路径


//1.引入http原生模块
const http = require("http");//http原生模块（自带的）
//文件操作的模块
const fs=require("fs");
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http请求发起的时候（去访问页面），才会执行回调函数里的内容
    //5.process.platform得到当前程序执行所在操作系统
    var sys=process.platform;

    var  htmlPath="";
    switch(sys){
        case "linux":
            htmlPath=__dirname+"/view/index.html";
            console.log(htmlPath);
            break;
        case "win32":
            htmlPath=__dirname+"\\view\\index.html";
            console.log(htmlPath);
            break;
        default:
            console.log("unkown system");
            break;
    }

    //"\\"其中一个\为转义符,获取文件路径（"\\"仅限于windows操作系统） 路径拼接
    var htmlContent=fs.readFileSync(htmlPath);//读取文件
    htmlContent=htmlContent.toString("utf8");//转换为可读的

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
//3.服务监听一个端口(会执行回调函数)
server.listen(8082);
console.log("server is listening 8082");//提示信息