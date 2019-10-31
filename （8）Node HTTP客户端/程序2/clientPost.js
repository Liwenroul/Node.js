//拆分终端运行,先启用服务端
const http=require("http");
const querystring=require("querystring");

var username=process.argv[2];
var password=process.argv[3];
var postData={username:username,password:password}//传递时不宜对象传输
var options={
    host:'localhost',
    port:8081,
    path:'/',
    method:'post'
};
postData=querystring.stringify(postData);//以字符串传输较好
var req=http.request(options,function(res){//请求地址

});//发起post请求

req.write(postData);
req.end();