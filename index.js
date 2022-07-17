
let menuIcon = document.querySelector(".menu");
let hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.style.display = "none";
menuIcon.addEventListener("click", () => {
    if (hamburgerMenu.style.display === "none") {
        menuIcon.src = "./images/close.png";
        hamburgerMenu.style.display = "flex";
    } else {
        menuIcon.src = "./images/menu.png";
        hamburgerMenu.style.display = "none";
    }
})



