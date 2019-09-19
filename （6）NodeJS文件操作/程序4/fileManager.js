const fs=require("fs");
const path=require("path");

console.log("请输入文件操作：");
process.stdin.on("data",function(data){
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            break;
        case "touch":
            var filePath=path.join(__dirname,"/view/file4.txt");
            fs.writeFileSync(filePath,"hello node");
            break;
        case "delete":
            var filePath=path.join(__dirname,"/view/file4.txt");
            fs.unlinkSync(filePath);
            break;
        default:
            console.log("something err");
            break;    
    }
})

















//自我
// var obj={};
// var arr=["请输入要创建的文件夹：","请输入要创建的文件：","请输入要删除的文件："]
// var i=1;

// console.log(arr[0]);
// process.stdin.on("data",function(data){
//     obj[arr[i-1]]=data.toString("utf-8");
//     var fileName=obj[arr[i-1]].split(" ")[1];
//     if(obj[arr[i-1]].indexOf("mkdir")){
//         fs.mkdir(fileName,{ recursive: true },function(err){
//             console.log("a");
//             if(err){
//                 console.log(err);
//             }
//         })
//     }
//     else if(obj[arr[i-1]].indexOf("touch")){
//         var filePath=path.join(__dirname,"/"+obj[arr[0]]+fileName);
//         var writeStream=fs.createWriteStream(filePath);
//         writeStream.write("hello node");
//         writeStream.end();
//     }
//     else if(obj[arr[i-1]].indexOf("delete")){
//         var filePath=path.join(__dirname,"/"+obj[arr[0]]+fileName);        
//         fs.rmdir(filePath,function(err){
//             if(err){
//                 console.log(err);
//             }
//         })
//         process.exit(process.pid);
//     }
//     else{
//         console.log(obj[i++]);
//     }
// })