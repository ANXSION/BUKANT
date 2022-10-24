var tagId="Tags";

var fiction=0;
var nonfiction=0;
var poetry=0;
var children=0;

var _fictionPath="\'../categories/fiction.html\',\'_parent\')";
var _nonfictionPath="\'../categories/nonfiction.html\',\'_parent\')";
var _poetryPath="\'../categories/poetry.html\',\'_parent\')";
var _childrenPath="\'../categories/children.html\',\'_parent\')";

var _fiction="<button class=\"bookButton\" onclick=\"window.open(" + _fictionPath + "\">Fiction</button>";
var _nonfiction="<button class=\"bookButton\" onclick=\"window.open("+ _nonfictionPath +"\">Non-Fiction</button>";
var _poetry="<button class=\"bookButton\" onclick=\"window.open("+ _poetryPath +"\">Poetry</button>";
var _children="<button class=\"bookButton\" onclick=\"window.open("+ _fictionPath +"\">Children</button>";

function generateTags( fiction, nonfiction, poetry, children){
    document.getElementById(tagId).innerHTML = "<p>Tags:</p>";
    if (fiction==1){
        document.getElementById(tagId).insertAdjacentHTML("beforeend",_fiction);
    }
    if (nonfiction==1){
        document.getElementById(tagId).insertAdjacentHTML("beforeend",_nonfiction);
    }
    if(poetry==1){
        document.getElementById(tagId).insertAdjacentHTML("beforeend",_poetry);
    }
    if(children==1){
        document.getElementById(tagId).insertAdjacentHTML("beforeend",_children);
    }
}

