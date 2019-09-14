const h=require("./radio.js");

h.Radio=new h.Radio(process.argv[2],process.argv[3]);
h.Radio.play();
setTimeout(function(){
    console.log("lalala");
    h.Radio.stop();
}, 2000);