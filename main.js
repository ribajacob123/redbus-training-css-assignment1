window.onload = function () {
    const element=[
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"Bus staff was wearing masks?","imgsrc":"images/tempcheck.jpg","imgid":"","checkboxid":"","checkboxname":"ck"},
        {"q":"No safety measures were followed","imgsrc":"images/homesafety.jpg","imgid":"imglast","checkboxid":"cklast","checkboxname":"ck10"},
    ]

    let content = "";
    var flexContainer = document.getElementById("flex-container");
    for (let i = 0; i < element.length; i++) {
        content += '<div class="container"><div class="visual-aid"><img src="'+element[i]["imgsrc"]+'"id = "'+element[i]["imgid"]+'"><label class="checkbox-container"><input name="'+element[i]["checkboxname"]+'"id = "'+element[i]["checkboxid"]+'" type="checkbox" onclick="ckChange(this)"><span class="checkmark"></span></label></div><p class="query">' +
            element[i]["q"] + '</p></div>'
        }

    flexContainer.innerHTML = content
}



function ckChange(cb) {
    var imglast = document.getElementById("imglast");
    var imgs = document.getElementsByTagName("img");

    var last = document.getElementById("cklast");
    var ckName = document.getElementsByName("ck");

    if (cb.name != "ck10") {
        last.checked = false;
        for (var i = 0; i < ckName.length; i++) {
            ckName[i].disabled = false;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = 1;
        }
        imglast.style.opacity = 0.2;
    } else {
        last.disabled = false;
        for (var i = 0; i < ckName.length; i++) {
            ckName[i].checked = false;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = 0.2;
        }
        imglast.style.opacity = 1;
    }
}

function validateForm(form){
    var checkboxes = document.getElementsByName("ck");
    var last  = document.getElementById("cklast");

    var flag = 0
    for(var i =0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == true){
            flag = 1
        }
    }
    if(flag ==1 || last.checked == true);
    else{
        alert("Please select the required checkboxes")
        return false;
    }
}