//导航栏标题改变
function changeNavTitle(){
    Ids=["site-title","nav-title"];
    for(var i=0;i<Ids.length;i++){
        if(document.getElementById(Ids[i])==null){
            continue;
        }
        document.getElementById("nav-title-now").innerHTML=document.getElementById(Ids[i]).innerHTML;
        break;
    }
}
changeNavTitle();