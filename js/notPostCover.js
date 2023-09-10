
function changeCover(title){
    imgs={"标签":"https://images.unsplash.com/photo-1571907483086-3c0ea40cc16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          "分类":"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          "Archives":"https://images.unsplash.com/photo-1530286443292-077db8d466a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
          "关于我":"https://s1.imagehub.cc/images/2023/08/25/fogflea.gif"}
    if(title!="标签"&&title!="分类"&&title!="Archives"&&title!="关于我"){
        if(title!="Fogflea's blog"){
            document.getElementById("page-header").style.backgroundImage+=",linear-gradient(rgba(34, 34, 34, 0.8),rgba(34, 34, 34, 0.3))"
        }
        return;
    }
    document.getElementById("page-header").style.backgroundImage="linear-gradient(rgba(34, 34, 34, 0.8),rgba(34, 34, 34, 0.3)),url("+imgs[title]+")";
}
function findTitle(){
    Ids=["site-title","nav-title"];
    for(var i=0;i<Ids.length;i++){
        if(document.getElementById(Ids[i])==null){
            continue;
        }
        return document.getElementById(Ids[i]).innerHTML;
    }
}
changeCover(findTitle());