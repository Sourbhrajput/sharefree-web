const express = require("express");
require('dotenv').config();

const dbCon=require('./config/config_db');
const path = require('path');
dbCon();
var cors = require('cors');  
const port=process.env.PORT || 2000;
const app=express();
app.use(cors());  
app.use(express.json());
app.use('/src/',express.static(path.join(__dirname,'/src/')));
app.use('/img/',express.static(path.join(__dirname,'/public/img/')));
app.use('/', require('./routes/home'));  
app.use('/file/upload/', require('./routes/upload')); 
app.use('/file/download/',require('./routes/show')); 
app.use('/file/download/link',require('./routes/download'));
app.use( "/file/download/link/done",express.static(path.join(__dirname,'./files/')));
app.use('/file/send/',require('./routes/send_mail'));
app.use('*',require('./routes/pagenotfound'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.listen(port,(err)=> 
{
    if (err)
    console.log(err); 

    console.log(port);
     
})

 
   
 
   

 
