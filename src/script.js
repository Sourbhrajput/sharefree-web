const drop_con = document.querySelector(".drop-container");
const fileInput = document.querySelector(".fileInput");
const browse = document.querySelector(".browse");
const meter = document.querySelector(".meter");
const line_percentage = document.querySelector(".line_percentage");
// const url = `http://localhost:1000/`;
const url='https://sharefree-web.herokuapp.com/';
const file_url = `${url}file/upload/`;
const mail_url = `${url}file/send/`;
const small_meter = document.querySelector(".small_meter");
const upload_meter = document.querySelector(".upload_meter");
const show_url = document.querySelector(".show_url");
const url_div = document.querySelector(".url_div");
const download_url = document.querySelector(".download_url");
const copy = document.querySelector(".copy");
const send_mail = document.querySelector(".send_mail");
const copied=document.querySelector('.copied');
const send=document.querySelector('.send');
const github=document.querySelector('.github');

 

// style


github.addEventListener('mouseover',()=>
{
   drop_con.parentElement.style.overflow='visible';
})
github.addEventListener('mouseout',()=>
{
   drop_con.parentElement.style.overflow='hidden';
})

drop_con.addEventListener("dragover", (e) => {
  e.preventDefault();
  drop_con.classList.add("droped");
  drop_con.classList.add("bg");
});
drop_con.addEventListener("dragleave", (e) => {
  drop_con.classList.remove("droped");

  drop_con.classList.remove("bg");
});
drop_con.addEventListener("drop", (e) => {
  e.preventDefault();
  drop_con.classList.remove("droped");
  drop_con.classList.remove("bg");
  let files = e.dataTransfer.files;
  if (files.length)
  {
    fileInput.files = files;
    uploadFile(files);
  }
  
});

browse.addEventListener("click", (e) => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  if(!fileInput.files[0])
 {
   return
 }
 const files = fileInput.files;
  uploadFile(files);
});

const uploadFile = (files) => {
  const file = files[0];
  const formData = new FormData();
  formData.append("uploadfile", file);
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const file = JSON.parse(xhr.response).file;

      show_url.value = file;
      upload_meter.classList.add("display_meter");
      url_div.classList.remove("display_meter");
      send.innerHTML='Send Successfully';
    }
  });

  xhr.upload.addEventListener("progress", (e) => {
    let upload_per = Math.round((e.loaded / e.total) * 100);
    upload_meter.classList.remove("display_meter");
    meter.style.width = `${upload_per + 2}%`;
    line_percentage.innerHTML = `${upload_per}%`;
    small_meter.style.width = `${upload_per}%`;

  });

  xhr.open("POST",file_url);
  xhr.send(formData);
};

show_url.addEventListener("click", (e) => {
  e.stopPropagation();
  download_url.style.border = "2px solid var(--border-color)";
});

document.addEventListener("click", () => {
  download_url.style.border = "2px  dashed var(--border-color)";
});

copy.addEventListener("click", (e) => {
  show_url.select();
  document.execCommand("copy");
  copied.setAttribute('disabled','true');
  copied.style.transform= 'translateY(-70px)';
  
  setTimeout(() => {
  copied.style.transform= 'translateY(0px)';
  copied.removeAttribute('disabled');
  }, 2000);
});

//  mail

send_mail.addEventListener("submit", (e) => {
  e.preventDefault();
  const mail_data = {
    uuid: show_url.value.split("/").splice(-1, 1)[0],
    from: send_mail[0].value,  
    to: send_mail[1].value, 
  };
  send.setAttribute('disabled','true');
  send.style.transform= 'translateY(-70px)';
  
  setTimeout(() => {
  send.style.transform= 'translateY(0px)';
 send.removeAttribute('disabled');
  }, 2000);


  fetch(mail_url, {
    method: "POST",
    body: JSON.stringify(mail_data),
    headers:{
      'Content-Type':'application/json'
    }
  })
    .then((data) => {
    return data.json();
})
    .then((resp) => {
       if(resp.message){

        send.innerHTML=resp.message;
       }
       
    });
});

 
