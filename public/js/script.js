'use strict'


/* function to toggle navigation and dark mode */
function dynamicToggle() {
    /* get element from dom */
    const themeToggle = document.querySelector("#themeToggle");
const body = document.documentElement;
const nav = document.querySelector("nav");
const hamburgerMenu = document.querySelector("#hamburgerMenu");
const ulLinks = document.querySelectorAll('ul a')

    
    /* open nav */
    hamburgerMenu.addEventListener("click", () => {
        nav.classList.toggle('active');
    });
    /* close nav on click of links */
    ulLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
/* load saved theme from local storage */
    const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'darkMode') {
    body.classList.add('darkMode');
};
/* toggle dark mode */
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("darkMode");
        if (body.classList.contains('darkMode')) {
            localStorage.setItem('theme', "darkMode");
        } else {
            localStorage.removeItem('theme');
        }
    });
};
dynamicToggle();