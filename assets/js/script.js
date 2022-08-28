"use strict";

const navTabs = document.querySelectorAll(".nav__link");
const teamRow = document.querySelector(".team__row");
const navMenu = document.querySelectorAll(".menu__outline");
const nav = document.querySelectorAll(".nav");
const mobileNav = document.querySelector(".mobile__nav");


let isStart = true;
let isMobile = window.innerWidth >= 780 ? false : true;
let isNavOpen = false;
mobileNav.style.display = "none";

//website loop
let websiteLoop = setInterval(() => {
    const scrollTop = document.querySelector("html").scrollTop;
    const stickyNav = document.querySelector(".sticky__nav");
    if (scrollTop > 150 || isMobile) {
        stickyNav.style.display = "flex";
    } else {
        stickyNav.style.display = "none";
    }

    if (window.innerWidth >= 1000) {
        isMobile = false;
        nav[0].classList.add("animate__animated");
        nav[1].classList.add("animate__animated");
        navMenu[0].classList.add("hidden");
        navMenu[1].classList.add("hidden");
        setMobileNav(false);
    } else if (window.innerWidth < 1000 && !isNavOpen) {
        isMobile = true;
        nav[0].classList.remove("animate__animated");
        nav[1].classList.remove("animate__animated");
        navMenu[0].classList.remove("hidden");
        navMenu[1].classList.remove("hidden");
    }
}, 3);

//////////////////////////////////////////

//Mobile Nav
navMenu[0].addEventListener("click", () => {
    if (isNavOpen) {
        setMobileNav(false);
    } else if (!isNavOpen) {
        setMobileNav(true);
    }
});

document.querySelector(".mobile__nav__links").addEventListener("click", (e) => {

    //checks if not clicking on a nav__link
    if (!e.target.classList.contains('nav__link__a')) return;

    setMobileNav(false);
});

document.querySelector("body").addEventListener("click", (e) => {
    if (!(e.target.classList.contains('mobile__nav')
        || e.target.classList.contains('mobile__nav__link')
        || e.target.classList.contains('nav__link__a')
        || e.target.classList.contains('mobile__nav__links')
        || e.target.classList.contains('mobile__nav__brand')
        || e.target.classList.contains('menu__outline'))
        && isNavOpen) {
        setMobileNav(false);
    }
});

function setMobileNav(setOpen) {
    if (setOpen) {
        navMenu[0].name = "close-outline";
        navMenu[1].name = "close-outline";
        mobileNav.style.display = "block";
        isNavOpen = true;
    } else if (!setOpen) {
        navMenu[0].name = "menu-outline";
        navMenu[1].name = "menu-outline";
        mobileNav.style.display = "none";
        isNavOpen = false;
    }
}

///////////////////////////////////////////

/*Todo list
1) Update images
2) Lazy loading of images
3) Optimization
4) Allow for map dragging on desktop but not mobile
5) Tweak text
6) Finish footer
*/

////////////////////////////////////////////

//Lazy loading (optimization)
const images = document.querySelectorAll(".lazy__load");

images.forEach((image) => {
    image.src = image.dataset.src;
    image.addEventListener("load", () => {
        image.classList.remove("lazy__load");
    });
});