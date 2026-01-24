const dropdown = document.querySelector(".header .navbar .navlist .dropdown");
const mobile_menu = document.querySelector(".header .navbar .navlist ul");
const header = document.querySelector(".header.container");

dropdown.addEventListener("click", ()=>{
    dropdown.classList.toggle("close");
    mobile_menu.classList.toggle("close");
})