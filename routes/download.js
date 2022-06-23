const route = require("express").Router();

const collection =require('../Schema/schema');

route.get('/:filename', async(req,resp)=>
{
  
 const filename=req.params.filename;
 


 resp.download(`./files/${filename}`);
 
 
})

module.exports=route;