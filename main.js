const navbarLinks = document.querySelector('#navbar-links');

const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener("click", function(){
    navbarLinks.classList.toggle("active");
    document.activeElement("click", function (e) {
        if (
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbarLinks)
        ) {
            navbarLinks.classList.remove("active");
        }
    });
});

const navbar = document.querySelector(".navbar");
const scrollBackground = '#363636';


window.addEventListener("scroll", () => {

    navbar.style.backgroundColor = scrollBackground;
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "none";

    } else {
        navbar.style.backgroundColor = "transparent";
    }
    
});