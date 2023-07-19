var Icon = document.querySelector(".m-icon");
var sidebar = document.querySelector(".sidebar");
var contain= document.querySelector(".container");
Icon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    contain.classList.toggle("large-container");
}