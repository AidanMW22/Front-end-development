// JavaScript Document
console.log("hi");

var openSearchButton = document.querySelector("header > button");
var search= document.querySelector("header nav");

openSearchButton.onclick = openMenu;
function openMenu() {
    search.classList.add("open")
}




var openMenuButton = document.querySelector("header > button");
var deMenu= document.querySelector("header nav");

openSearchButton.onclick = openMenu;
function openMenu() {
    search.classList.add("open")
}