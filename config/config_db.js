const mongoose=require('mongoose');
require('dotenv').config();
 
const dbCon=()=>
{
    mongoose.connect(process.env.DATABASE_CONNECT_URL,(err)=>
    {
        if(err) 
        {
            console.log(err);
        }
       
    });
    
}

module.exports=dbCon;

