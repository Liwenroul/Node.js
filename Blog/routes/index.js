var express = require('express');
var router = express.Router();
const server=express();
const fs=require("fs");
const path=require("path");
const bodyParser=require("body-parser");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));


var filePath=path.join(__dirname,"../config/data.json");
var fileContent=fs.readFileSync(filePath);
var data=JSON.stringify(fileContent);
var dataObj=JSON.parse(data);
var arr=Buffer.from(dataObj);
var arr1=arr.toString();
var arrObj=JSON.parse(arr1);
// console.log(arrObj.chapterList);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list',function(req,res,next){
  res.render('list',{chapterList:arrObj.chapterList});
});

router.get('/login',function(req,res,next){
  res.render('login');
});

router.post('/loginIn',function(req,res,next){
  var loginUser=req.body;
  // console.log(loginUser.username);
  // console.log(arrObj.users[0].username);
  if(loginUser.username==arrObj.users[0].username && loginUser.pwd==arrObj.users[0].password){
    res.end("true");
  }
  else{
    res.end("false");
  }
})

module.exports = router;
