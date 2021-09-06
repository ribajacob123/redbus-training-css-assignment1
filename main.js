
function ckChange(cb){
    var imglast = document.getElementById("imglast");
    var imgs = document.getElementsByTagName("img");

    var last = document.getElementById("cklast");
    var ckName = document.getElementsByName("ck");

    if(cb.name !="ck10"){
        last.checked = false;
        for(var i=0;i<ckName.length;i++){
            ckName[i].disabled = false;
        }
        for(var i = 0; i<imgs.length;i++){
            imgs[i].style.opacity = 1;
        }
        imglast.style.opacity = 0.2;
    }

    else{
        last.disabled = false;
        for(var i=0;i<ckName.length;i++){
            ckName[i].checked = false;
        }
        for(var i = 0; i<imgs.length;i++){
            imgs[i].style.opacity = 0.2;
        }
        imglast.style.opacity = 1;
    }


}
