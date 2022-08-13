var bookId=0;
var bookLog=["Book 1", "Author 1", 150] ["Book 2", "Author 2", 200];
var currenttime= new Date()/1000;
var loginStatus;
var cartItemCount;
var switchAccountId;

var users=[["admin","admin","@admin","admin","admin@admin.localhost","red"],["bukant", "bukant","@BUKANT","Bukant", "www.bukant.com", "darkturquoise"]];
localStorage.setItem("_users", JSON.stringify(users))
localStorage.setItem("_usercount", "2");

var level;

if (localStorage.getItem("_loginStatus")){
    loginStatus=localStorage.getItem("_loginStatus");
}
else{
    localStorage.setItem("_loginStatus","false");
    localStorage.setItem("_loginAccess","0");
    localStorage.setItem("_username", "null");
    localStorage.setItem("_name", "null");
    localStorage.setItem("_email", "null");
    localStorage.setItem("_userimage", "NULL");
    loginStatus=localStorage.getItem("_loginStatus");
    localStorage.setItem("_cartItemCount", "0");
}

var drawerStatus = false;



function checkCart(){
    cartItemCount= parseInt(localStorage.getItem("_cartItemCount"));
    console.log(cartItemCount);
    if (cartItemCount==0){
        document.getElementById("cartCounter").style.display="none";
    }
    else if (cartItemCount>0&&cartItemCount<=9){
        document.getElementById("cartCounter").style.display="flex";
        document.getElementById("cartCounterDisplay").textContent=cartItemCount;
    }
    else if(cartItemCount>9){
        localStorage.setItem("_cartItemCount", 9);
        cartItemCount= parseInt(localStorage.getItem("_cartItemCount"));
        document.getElementById("cartCounter").style.display="flex";
        document.getElementById("cartCounterDisplay").textContent=cartItemCount;
        document.getElementById("cartIconContainer").style.animation="cardNudge 1s";
        setTimeout(function(){
            document.getElementById("cartIconContainer").style.animation="none";
        },1000)
    }
}

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

function accessCart(level){
    var accessDirec;
    if(level==1){
        accessDirec="page/cart.html";
    }
    else if(level==2){
        accessDirec="cart.html";
    }
    if (loginStatus=="false"){
        document.getElementById("cartIconContainer").style.animation="cardNudge 1s";
        setTimeout(function(){
            document.getElementById("cartIconContainer").style.animation="none";
        },1000)
    }
    else{
        window.open(accessDirec, "_parent");
    }
}

function addToCart(){
    if (loginStatus=="false"){
        document.getElementById("cartIconContainer").style.animation="cardNudge 1s";
        setTimeout(function(){
            document.getElementById("cartIconContainer").style.animation="none";
        },1000)
    }
    else{
        localStorage.setItem("_cartItemCount", (cartItemCount+1));
        checkCart();
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
    var count=localStorage.getItem("_usercount");
    var errusr=0, errpas=0;

    var Dat=JSON.parse(localStorage.getItem("_users"));

    console.log(Dat);
    console.log(count);

    for (var codei=0;codei<count;codei++){
        document.getElementById("invalidUsername").style.display="none";
        document.getElementById("invalidPassword").style.display="none";
        console.log("Loop");
        if (getUsername==Dat[codei][0]){
            if (getPassword==Dat[codei][1]){
                localStorage.setItem("_loginStatus","true");
                localStorage.setItem("_loginAccess",codei);
                location.reload();
                break;
            }
            else{
                errpas=1;
                break;
            }
        }
        else{
            errusr=1;
        }
    }
    if(errusr==1){
        document.getElementById("invalidUsername").style.display="flex";
    }
    else if (errusr==0&&errpas==1){
        document.getElementById("invalidPassword").style.display="flex";
    }
}

function registerAccount(){
    var getRegemail=document.getElementById("Regemail").value;
    var getRegUsername=document.getElementById("Regusername").value;
    var getRegPassword1=document.getElementById("Regpassword1").value;
    var getRegPassword2=document.getElementById("Regpassword2").value;
    var RegDat=JSON.parse(localStorage.getItem("_users"));

    document.getElementById("invalidRegUsername").style.display="none";

    for (var i =0; i<=parseInt(localStorage.getItem("_usercount"));i++){
        if(getRegUsername==RegDat[i][0]){
            document.getElementById("invalidRegUsername").style.display="flex";
            break;
        }
    }
}

function switchAccount(switchAccountId){
    if(switchAccountId=="login"){
        document.getElementById("regForm").style.display="none";
        document.getElementById("loginForm").style.opacity="0";
        document.getElementById("loginForm").style.display="flex";
        setTimeout(() => {
            document.getElementById("loginForm").style.opacity="100%";
        }, 500);
    }
    else if(switchAccountId=="register"){
        document.getElementById("loginForm").style.display="none";
        document.getElementById("regForm").style.opacity="0";
        document.getElementById("regForm").style.display="flex";
        setTimeout(() => {
            document.getElementById("regForm").style.opacity="100%";
        }, 500);
    }
}

function logout(){
    localStorage.setItem("_loginStatus","false");
    location.reload();
}