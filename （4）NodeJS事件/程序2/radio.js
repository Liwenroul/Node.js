const events=require("events");
const EventEmitter=events.EventEmitter;
const util=require("util");

function Radio(name,raste){
    EventEmitter.call(this);
    this.name=name;
    this.raste=raste;
}
util.inherits(Radio,EventEmitter);//继承，util.inherits(子构造函数,父构造函数);
Radio.prototype.play=function(){
    console.log(this.name+" "+this.raste+" "+"opened");
}
Radio.prototype.stop=function(){
    console.log(this.name+" "+this.raste+" "+"closed");
}

module.exports={
    Radio:Radio,
}



