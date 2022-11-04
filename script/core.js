var _genreMobile=false;
var _genreWeb=false;
var _accountDrawer = false;

function categoriesMobileDrawer(drawerStatus){
    if (drawerStatus=='open'){
        document.getElementById('categoriesMobile').style.display="flex";
        document.getElementById('body').style.overflowY="hidden";
        setTimeout(()=>{document.getElementById('categoriesMobile').style.opacity="100%";}, 100);
        
    }
    else if (drawerStatus=='close'){
        document.getElementById('categoriesMobile').style.opacity="0%";
        document.getElementById('body').style.overflowY="scroll";
        setTimeout(()=>{document.getElementById('categoriesMobile').style.display="none";}, 100);
    }
}

function booksGenreMobile(){
    if (_genreMobile==false){
        document.getElementById('booksGenre').style.display="flex";
        _genreMobile=true;
    }
    else if (_genreMobile==true){
        document.getElementById('booksGenre').style.display="none";
        _genreMobile=false;
    }
}

function booksGenreWeb(){
    if (_genreWeb==false){
        document.getElementById('categoriesWeb').style.display="flex";
        setTimeout(()=>{document.getElementById('categoriesWeb').style.opacity="100%";}, 100);
        _genreWeb=true;
    }
    else if (_genreWeb==true){
        document.getElementById('categoriesWeb').style.opacity="0%";
        setTimeout(()=>{document.getElementById('categoriesWeb').style.display="none";}, 100);
        _genreWeb=false;
    }
}

function accountDrawer(){
    if (_accountDrawer==false){
        document.getElementById('user').style.display="flex";
        setTimeout(()=>{document.getElementById('user').style.opacity="100%";}, 100);
        _accountDrawer=true;
    }
    else if (_accountDrawer==true){
        document.getElementById('user').style.opacity="0%";
        setTimeout(()=>{document.getElementById('user').style.display="none";}, 100);
        _accountDrawer=false;
    }

}
