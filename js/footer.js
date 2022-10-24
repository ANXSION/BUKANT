var footerId="footerTag";

var _footerData = "<h1>Copyright &copy; 2022 BukAnt</h1><p>Hand coded with love by Anurag</p>"

function generateFooter(){
    document.getElementById(footerId).insertAdjacentHTML("beforeend",_footerData);
}