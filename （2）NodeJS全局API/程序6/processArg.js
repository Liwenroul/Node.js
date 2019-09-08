var arg=process.argv[2];
if(arg==undefined){
    console.log("未定义传入参数");
}
else if(arg=="-h"){
    console.log("应输入参数为数学运算式");
}
else{
    var result=eval(arg);
    console.log(arg+"=%s",result);
}