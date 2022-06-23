const http=require('http');
const send_html=({filename,size,download_link})=>
{
    
    return(
`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/src/upload.css">
    <title>shareProton download</title>

</head>
<body>
     <div class="container">

  <div class="inner_container">
 <div class="content">
   <h1 class="txt-download">Your file is ready to download</h1>
 <img src="/img/pngwing.com.png" draggable="false" alt="">
<h3>${filename}</h3>
<h5>Size:${size}kb</h5><br>
<a href="${download_link}"class="download_btn">Download</a>
  <h3>Link expire in 24Hr</h3>
</div>

     </div>
    </div>


</body>
<style>
        :root{
    --background-color:rgba(220, 229, 237, 0.991);
    --border-color:rgba(20, 221, 221, 0.694);
}

.container{
   width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
 background-color: var(--background-color);
}
*{
    padding: 0px;
    margin: 0px;
  font-family: system-ui;
}

.inner_container{
 width:300px;

 text-align: center;

 background-color: #fff;
border-radius: 10px;
 padding: 30px;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
 
}
.content{

    padding:60px 20px;
    border-radius: 10px;
    border: 3px  dashed var(--border-color);
}
.inner_container img{
    width: 100px;
}
.download_btn{
    background-color: var(--border-color);
    color:#fff;
    border: none;
    padding: 5px 12px;
    margin-top:20px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 10px;
    transition: background-color .3s linear;
    margin-bottom:20px;
    text-decoration: none;
    display: inline-block;
}
.download_btn:hover{
    background-color: rgba(20, 221, 221, 0.918);
}

.content img{
    margin-bottom: 20px;
}
.content h3{
    font-size:14px;


}
.content h5{
    margin-top:8px;
    display: inline-block;
    padding: 3px 7px;
    border-radius: 10px;
    background-color: var(--background-color);
}
    .txt-download{
         font-size:18px;
         margin-bottom: 20px;
     }
    </style>
</html>
   ` )
}


module.exports=send_html;