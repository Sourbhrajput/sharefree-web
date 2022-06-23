const route=require('express').Router();
const collection=require('../Schema/schema');
const send_html=require('../src/send_html');
require('dotenv').config();
route.post('',async(req,resp)=>
{ 
   let {uuid,from,to}=req.body;
   
   let data= await collection.findOne({uuid:uuid});
    
  const filename=data.filename;
  const size=Math.round(data.size/1024);
   
  if(data.sender)
  {
      return(
          resp.json({"message":'Mail already send'})
      )
  }
  data.sender=from;
  data.receiver=to;
  download_link=`${process.env.URL_LINK}file/download/${uuid}`;
  await data.save();
   
  const sendMail=require('../config/mail');

  sendMail({
      from:from,
      to:to,
      subject:"Download shared file now",
      text:`A file share to you by ${from}`,
      html:send_html({filename,size,download_link})
    })
    
    return(
        resp.send({'sucesss':'true'})
    )
 
})




module.exports=route;