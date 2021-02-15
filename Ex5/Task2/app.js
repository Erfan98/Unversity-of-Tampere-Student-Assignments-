function execute(click){
    let cont=document.getElementById("tab-content");
    let contList=cont.getElementsByTagName("div");
    
    for(let i=0; i<contList.length; i++){
        contList[i].classList.remove("active");
    
    }
     if(click=='tab1'){
         contList[0].classList.add("active")
     }
     else if(click="tab2"){
         contList[1].classList.add("active");
     }
    //  console.log(click)
}