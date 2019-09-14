const events=require("events");
const EventEmitter=events.EventEmitter;
const util=require("util");

function Radio(name,raste){
    EventEmitter.call(this);
    this.name=name;
    this.raste=raste;
}
util.inherits(Radio,EventEmitter);
Radio.prototype.play=function(){
    console.log(this.name+" "+this.raste+" "+"opened");
}
Radio.prototype.stop=function(){
    console.log(this.name+" "+this.raste+" "+"closed");
}

module.exports={
    Radio:Radio,
}
// var radio=new Radio(process.argv[2],process.argv[3]);
// radio.play();
// setTimeout(function(){
//     console.log("lalala");
//     radio.stop();
// }, 2000);
