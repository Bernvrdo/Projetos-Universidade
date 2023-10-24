var searchBox=document.getElementById("search-bar");
var Icon=document.getElementsByClassName("submit")[0];
Icon.onclick=function(){
    searchBox.classList.toggle("active");
};

window.onscroll=function(){
    searchBox.classList.remove("active");
}


