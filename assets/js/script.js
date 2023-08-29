"use strict";

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const menuItems = document.querySelectorAll(".menu-item");

function menuBtnToggler() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menuBtnIcon.classList.add("fa-bars");
        menuBtnIcon.classList.remove("fa-x");
    } else {
        menu.classList.add("active");
        menuBtnIcon.classList.remove("fa-bars");
        menuBtnIcon.classList.add("fa-x");
    }
}

menuBtn.addEventListener("click", menuBtnToggler);
menuItems.forEach((item) => {
    item.addEventListener("click", menuBtnToggler);
});
