// JavaScript Document
console.log("hi");

var openSearchButton = document.querySelector(".searchKnop");
var deNav = document.querySelector("header nav")

openSearchButton.onclick = openMenu;

function openMenu() {
    deNav.classList.add("openSearch")
}


var sluitKnop = document.querySelector()



window.onresize = checkDetails;

const details = document.querySelectorAll("details");

function checkDetails() {
  const vpWidth = window.innerWidth;

  if (vpWidth > 640) {
    console.log("breed");

    details.forEach(detail => {
      detail.open = true;
    });
  }
  else {
    details.forEach(detail => {
      detail.open = false;
    });
  }

}




