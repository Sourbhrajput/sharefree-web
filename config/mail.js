 const nodemailer =require('nodemailer');
  require('dotenv').config();
let sendMail= async ({from,to,subject,text,html})=>
{

    let transporter=nodemailer.createTransport({

      host:`${process.env.SMTP_HOST}`,
      port:process.env.SMTP_POST,
      secure:false,
      requireTLS:true,
      auth:{
          user:process.env.MAIL_USER,
          pass:process.env.MAIL_PASSWORD
      }
       

    });

 
    transporter.sendMail({
   
        from:`shareProton<${from}>`,
        to,
        subject,
        text,
        html


    },(err,info)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(info.response);
        }
    })

    
 
 
}


module.exports=sendMail;