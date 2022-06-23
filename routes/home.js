const route=require('express').Router();
const path = require('path');
const deletefile=require('../deletefiles');                     
route.get('/',(req,resp)=>
{

    resp.sendFile(path.join(__dirname,'../public/index.html'));
    deletefile();
});

module.exports=route;



 