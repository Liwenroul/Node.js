//process.exit()表示当前进程退出
//process.kill()表示杀死进程

var arg1=process.argv[2];
if(arg1=="e"){
    process.exit();
}
else if(arg1=="k"){
    process.kill(process.pid);
}
else if(arg1=="-help"){
    console.log("帮助：命令参数虚伪算术运算式");
}
else{
    setTimeout(function(){
        console.log("延时执行");
    },5000)
}