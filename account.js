document.getElementById("start").onclick=function(){
    let popbo=document.getElementById("popbox");
    popbo.style.opacity=1;
    popbo.style.display="block";
};
document.getElementById("btn2").onclick=function(){
alert("process cancelled");
document.getElementById("popbox").style.display="none";
};
document.getElementById("btn1").onclick=function(){
     if(window.confirm("Are you sure you want to proceed")){
        alert("ACCOUNT DELETED!!!!");
        document.getElementById("popbox").style.display="none";
        document.getElementById("start").innerHTML="account deleted"
     }
     else{
        alert("process cancelled");
     }
    
};