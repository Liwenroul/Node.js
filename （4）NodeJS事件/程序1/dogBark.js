//自我
// var h=require("./dog.js");
// var dog1=new h("taidi",5);

var h=require("./dog.js");
var dog1=new h("taidi",5);

function barkFun(){
    console.log(this.name+"barked");
    console.log(this.energy);
}
dog1.on("bark",barkFun);//注册事件

var interval=setInterval(function(){
    if(dog1.energy>=0){
        dog1.emit("bark");
    }
    else{
        intervalId.unref();//阻止定时执行
    }
    dog1.energy=dog1.energy-1;
},1000);
