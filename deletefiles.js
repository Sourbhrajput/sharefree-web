const collection=require('./Schema/schema');
const fs=require('fs');
const path = require('path');
const deletefile= async()=>
{    const nowdate= new Date(Date.now()-(1000*60*60*24));
     const result = await collection.find({createdAt:{$lt:nowdate}});
     if(!result[0])
     {
        return;
     }
     let filepath=path.join(__dirname,'files');
     let readdir=fs.readdirSync(filepath);
     
     
    
     for (let data of result)
     {
        const filename=data.filename;
        
        for (let file of readdir)
        { 
            
            if(filename==file) 
            {
               
                 fs.unlink(path.join(filepath,filename),(err)=>
                {
                    if(err) throw err;
         
                } );
            }
        }
      
        collection.deleteOne({uuid:data.uuid},(err,data)=>
        {
            if(err) throw err;
            console.log(data);
        });

       
         
    

     } 
 

}

module.exports=deletefile;