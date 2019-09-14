const events=require("events");
const EventEmitter=events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name=name;
    this.energy=energy;
    var that=this;
    setInterval(function(){
        
        if(that.energy==1){
            clearTimeout(this);
        }
        console.log("bark");
        that.energy--;
        console.log(that.energy);
    }, 1000);
}

// var dog1=new Dog("taidi",5);
module.exports={
    Dog:Dog
}
