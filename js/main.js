// javaScript for toggle Menu
var nav_links = document.getElementById("nav_links");

function showMenu() {
  nav_links.style.right = "0px";
}
function hideMenu() {
  nav_links.style.right = "-200px";
}

// Preloder
var loader = document.getElementById("preloder");
window.addEventListener("load", function () {
  loader.style.display = "none";
});