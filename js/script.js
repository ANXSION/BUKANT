var menuStatus=0;
var categoryBookExtended=0;
var categoryAuthorExtended=0;

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

function categoryExtend(categoryType){
    if (categoryType=="book"){
        if (categoryBookExtended==0){
            document.getElementById("bookCategory").style.maxHeight="100%";
            document.getElementById("categoriesExtenderBar2").style.transform="rotate(0)";
            document.getElementById("categoriesExtenderBar1").style.backgroundColor="darkturquoise";
            document.getElementById("categoriesExtenderBar2").style.backgroundColor="darkturquoise";
            categoryBookExtended=1;
        }
        else{
            document.getElementById("bookCategory").style.maxHeight="0";
            document.getElementById("categoriesExtenderBar2").style.transform="rotate(90deg)";
            document.getElementById("categoriesExtenderBar1").style.backgroundColor="black";
            document.getElementById("categoriesExtenderBar2").style.backgroundColor="black";
            categoryBookExtended=0;
        }
    }
    if (categoryType=="author"){
        if (categoryAuthorExtended==0){
            document.getElementById("authorCategory").style.maxHeight="100%";
            document.getElementById("categoriesExtenderBar2").style.transform="rotate(0)";
            document.getElementById("categoriesExtenderBar1").style.backgroundColor="darkturquoise";
            document.getElementById("categoriesExtenderBar2").style.backgroundColor="darkturquoise";
            categoryAuthorExtended=1;
        }
        else{
            document.getElementById("authorCategory").style.maxHeight="0";
            document.getElementById("categoriesExtenderBar2").style.transform="rotate(90deg)";
            document.getElementById("categoriesExtenderBar1").style.backgroundColor="black";
            document.getElementById("categoriesExtenderBar2").style.backgroundColor="black";
            categoryAuthorExtended=0;
        }
    }
}
