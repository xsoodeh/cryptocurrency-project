// let menoBox = document.getElementById("menu-mob");
// let bodyBox = document.getElementById("main-elements");

function openMenu() {
    let menoBox = document.getElementById("menu-mob");
    let bodyBox = document.getElementById("main-elements");
    menoBox.classList.add("menu-mob-show");
    menoBox.classList.remove("menu-mob-close");
    bodyBox.classList.add("move-menu");
    bodyBox.classList.remove("move-back-menu");
}
function closeMenu() {
    let menoBox = document.getElementById("menu-mob");
    let bodyBox = document.getElementById("main-elements");
    menoBox.classList.remove("menu-mob-show");
    menoBox.classList.add("menu-mob-close");
    bodyBox.classList.remove("move-menu");
    bodyBox.classList.add("move-back-menu");
}
function closeMenuBody() {
    let menoBox = document.getElementById("menu-mob");
    let bodyBox = document.getElementById("main-elements");
    if (menoBox.classList.contains("menu-mob-show")){
        menoBox.classList.remove("menu-mob-show");
        menoBox.classList.add("menu-mob-close");
        bodyBox.classList.remove("move-menu");
        bodyBox.classList.add("move-back-menu");
    }
}

// window.onscroll(scrollNav());
// $(window).scroll(scrollNav());

window.onscroll= function(){scrollNav()};
function scrollNav(){
    let navbar = document.getElementsByClassName("menu");
    let sticky = navbar.scrollY;
    if (window.scrollY > 30) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}
// window.addEventListener("scroll", function () {
//         let navbar = document.getElementsByClassName("menu");
//     menu.classList.toggle("sticky", window.scrollY > 0);
// })