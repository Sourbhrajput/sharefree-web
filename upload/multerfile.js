const multer = require("multer");
const path=require ('path');
 
const storage=multer.diskStorage({
    destination:(req,file,cb)=>
    {
        filepath=path.join(__dirname,'../files');
        
        cb(null,filepath);
    },
    filename:(req,file,cb)=>
    {
        cb(null,  Date.now()+'-'+Math.round(Math.random()*1E6)+path.extname(file.originalname));
    }

    
});

const upload=multer({
    storage,
    limits:{fieldSize:104857600}
}).single("uploadfile");


module.exports=upload;

