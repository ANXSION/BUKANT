var drawerStatus = false;

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