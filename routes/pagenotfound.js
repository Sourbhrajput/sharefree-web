const route=require('express').Router();
const path = require('path');
route.get('',(req,resp)=>
{
 resp.render('filenotfound');
});

module.exports=route;


