const { default: mongoose } = require("mongoose");
 

const schema=new mongoose.Schema({
  
   filename:{type:String, required:true},
    path:{type:String, required:true},
    size:{type:Number, required:true},
    uuid:{type:String, required:true},
    sender:{type:String, required:false},
   receiver:{type:String, required:false},

},
{
 timestamps:true
}
);

const model=new mongoose.model('shareFileData',schema);
module.exports=model;