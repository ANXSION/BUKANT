var menuStatus=0;

function navigationDraw(){
    if (menuStatus==0){
        document.getElementById("bar1").style.transform="rotate(45deg) translate(5.6px , 5.6px)";
        document.getElementById("bar2").style.opacity="0";
        document.getElementById("bar3").style.transform="rotate(-45deg) translate(5.6px , -5.6px)";
        document.getElementById("categories").style.opacity="100";
        menuStatus = 1;
    }
    else {
        document.getElementById("bar1").style.transform="rotate(0) translate( 0, 0)";
        document.getElementById("bar2").style.opacity="100%";
        document.getElementById("bar3").style.transform="rotate(0) translate( 0, 0)";
        document.getElementById("categories").style.opacity="0";
        menuStatus = 0;
    }
}
