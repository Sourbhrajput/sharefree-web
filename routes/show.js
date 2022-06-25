const route = require("express").Router();
require('dotenv').config();
const collection =require('../Schema/schema');
const deletefile=require('../deletefiles');  
deletefile();
route.get('/:uuid', async(req,resp)=>
{
 const uuid=req.params.uuid;
 const result=await collection.findOne({uuid:uuid});
 
 if(!result)
 {
  resp.render('notfound');
  return
 }

const filedata={
    filename:result.filename,
    uuid:result.uuid,
    size:Math.round(result.size/1024),
    view_url:`${process.env.URL_LINK}file/download/link/done/${result.filename}`,
    download_url:`${process.env.URL_LINK}file/download/link/${result.filename}`
}

resp.render('show',{filedata});

})


module.exports=route;