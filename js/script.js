var drawerStatus = false;
var loginStatus;
if (loginStatus){
    loginStatus=localStorage.getItem('_loginStatus');
}
else{
    localStorage.setItem('_loginStatus','false');
    loginStatus=localStorage.getItem('_loginStatus');
}
var user=["admin","admin"];
console.log(loginStatus);

function openDrawer(){
    if(drawerStatus==false){
        document.getElementById("menubar1").style.transform="rotate(45deg) translate(2px,2px)";
        document.getElementById("menubar2").style.transform="rotate(-45deg) translate(2px,-2px)";
        document.getElementById("categoriesMobile").style.top="0";
        document.getElementById("body").style.overflowY="hidden";

        drawerStatus=true;
    }
    else {
        document.getElementById("menubar1").style.transform="rotate(0)";
        document.getElementById("menubar2").style.transform="rotate(0)";
        document.getElementById("categoriesMobile").style.top="100%";
        document.getElementById("body").style.overflowY="scroll";

        drawerStatus=false;
    }
}

function addToCart(){
    console.log(loginStatus);
    if (loginStatus=="false"){
        var col =document.querySelectorAll(".cardsAdd");
        col.forEach((lacksLogin) => {
            lacksLogin.style.animation="cardNudge 1s";
            setTimeout(function(){lacksLogin.style.animation="none";},500);
          });
    }
    else{

    }
}
