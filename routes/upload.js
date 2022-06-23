const express = require("express");
const upload=require('../upload/multerfile');
const route=express.Router();
const {v4:uuid4}=require('uuid');
const collection =require('../Schema/schema');
const path=require('path');
require('dotenv').config();



route.post('/',upload,async(req,resp)=>
{
 
 
     
    if(!req.file)
    {
        resp.json({message:"File not found"});
    }

     

      const  query=collection({
       
         filename:req.file.filename,
         path:req.file.path,
         size:req.file.size,
         uuid:uuid4()
    })
   
const result=await query.save();
 
resp.json({file:`${process.env.URL_LINK}file/download/${query.uuid}`});
 

 
 


 
}) 
 

module.exports=route;