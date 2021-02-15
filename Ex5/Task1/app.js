function updatetime() {
    var date= new Date()
var hour= date.getHours();
var min= date.getMinutes();
var sec= date.getSeconds();

var doc_hour=document.getElementById("hour")
doc_hour.innerHTML=hour+ ":";
var doc_min=document.getElementById("min")
doc_min.innerHTML=min+ ":"
var doc_sec=document.getElementById("sec")
doc_sec.innerHTML=sec
if(sec%2==0){
    doc_sec.style.backgroundColor="#deb887"
}
else{
    doc_sec.style.backgroundColor="#5f9ea0"
}
}

setInterval(updatetime,1000)

