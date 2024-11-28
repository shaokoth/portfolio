var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ----------------for phone screens

var sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0px";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

// -------------------script for Form

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxiGxg52cTGDLLUKNrNhQkQ_BVH-zTH4A7P15KuxMo0FGg35Ry-T5XnAATjtrl24Fc7/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.textContent = "Message sent succesfully";
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
