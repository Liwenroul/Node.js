const http=require("http");
const path=require("path");
const fs=require("fs");

http.createServer(function(req,res){
    var fileName=process.argv[2];
    
    if(fileName==undefined){
        var filePath=path.join(__filename);//process.argv[1]
        var fileConent=fs.createReadStream(filePath);//流：文件过大，可以一块一块的传输
        fileConent.pipe(res);
    }
    else{
        var filePath1=path.join(__dirname,"/"+fileName);
        fs.exists(fileName,function(exists){
            if(exists==false){
                console.log("该文件不存在");
            }
            else{
                var fileConent1=fs.createReadStream(filePath1);
                fileConent1.pipe(res);
            }
        })
    }
}).listen(8080);