//自我
// const events=require("events");
// const EventEmitter=events.EventEmitter;

// function Dog(name,energy){
//     EventEmitter.call(this);
//     this.name=name;
//     this.energy=energy;
//     var that=this;
//     setInterval(function(){
        
//         if(that.energy==1){
//             clearTimeout(this);
//         }
//         console.log("bark");
//         that.energy--;
//         console.log(that.energy);
//     }, 1000);
// }

// module.exports={
//     Dog:Dog
// }



const events=require("events");
var eventEmitter=events.EventEmitter;

function Dog(name,energy){
    eventEmitter.call(this);//继承events.EventEmitter上的方法
    this.name=name;
    this.energy=energy;
}
Dog.prototype.__proto__=eventEmitter.prototype;//覆盖Dog.prototype.__proto__这层，Dog.prototype上的方法和属性依然在

module.exports=Dog;
