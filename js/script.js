var bookId=0;
var bookLog=["Book 1", "Author 1", 150] ["Book 2", "Author 2", 200];

var loginStatus;
var level;

if (localStorage.getItem("_loginStatus")){
    loginStatus=localStorage.getItem("_loginStatus");
}
else{
    localStorage.setItem("_loginStatus","false");
    loginStatus=localStorage.getItem("_loginStatus");
}

var drawerStatus = false;


var bookName, BookAuthor, bookCount, bookAmount;

var user=["admin","admin"];

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

function accessCart(){
    console.log(loginStatus);
    if (loginStatus=="false"){
        document.getElementById("cartIconContainer").style.animation="cardNudge 1s";
        setTimeout(function(){
            document.getElementById("cartIconContainer").style.animation="none";
        },1000)
    }
    else{
        window.open("page/cart.html", "_parent");
    }
}

function AddToCart(){
    console.log(loginStatus);
    if (loginStatus=="false"){
        accessCart();
    }
    else{
        window.open("page/cart.html", "_parent");
    }
}

function home(level){
    if (level==0){
        window.open("index.html","_parent");
    }
    else if (level==1){
        window.open("../index.html", "_parent");
    }

}

function accessAccount(){
    var getUsername=document.getElementById("username").value;
    var getPassword=document.getElementById("password").value;

    if (getUsername=="admin"){
        if(getPassword=="admin"){
            localStorage.setItem("_loginStatus","true");
            location.reload();
        }
        else{
            document.getElementById("invalidPassword").style.display="flex";
        }
    }
    else{
        document.getElementById("invalidUsername").style.display="flex";
    }
}

function logout(){
    localStorage.setItem("_loginStatus","false");
    location.reload();
}

