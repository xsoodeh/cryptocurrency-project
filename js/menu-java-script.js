// const menoBox = document.getElementById("menu-mob");
// const bodyBox = document.getElementById("main-elements");
function openMenu() {
    let menoBox = document.getElementById("menu-mob");
    let bodyBox = document.getElementById("main-elements");
    let navbar = document.getElementById("menu");

    menoBox.classList.add("menu-mob-show");
    menoBox.classList.remove("menu-mob-close");
    bodyBox.classList.add("move-menu");
    bodyBox.classList.remove("move-back-menu");
    navbar.classList.add("move-menu");
    navbar.classList.remove("move-back-menu");
}
function closeMenu() {
    let menoBox = document.getElementById("menu-mob");
    let bodyBox = document.getElementById("main-elements");
    let navbar = document.getElementById("menu");

    menoBox.classList.remove("menu-mob-show");
    menoBox.classList.add("menu-mob-close");
    bodyBox.classList.remove("move-menu");
    bodyBox.classList.add("move-back-menu");
    navbar.classList.remove("move-menu");
    navbar.classList.add("move-back-menu");
}
function closeMenuBody() {
    let menoBox = document.getElementById("menu-mob");
    let bodyBox = document.getElementById("main-elements");
    if (menoBox.classList.contains("menu-mob-show")){
        menoBox.classList.remove("menu-mob-show");
        menoBox.classList.add("menu-mob-close");
        bodyBox.classList.remove("move-menu");
        bodyBox.classList.add("move-back-menu");
        navbar.classList.remove("move-menu");
        navbar.classList.add("move-back-menu");
    }
}

window.onscroll= function(){scrollNav()};
function scrollNav(){
    let navbar = document.getElementById("menu");
    let logo=document.getElementById("logo");
    // let menuButtons=document.getElementsByClassName("menuButtons");
    if (document.body.scrollTop > 75|| document.documentElement.scrollTop > 75) {
        navbar.classList.add("sticky");
        logo.classList.add("stickyMenu-logo");
        // menuButtons.classList.add("stickyMenu-button");
    }
    else {
        navbar.classList.remove("sticky");
        logo.classList.remove("stickyMenu-logo");
        // menuButtons.classList.remove("stickyMenu-button");
    }
}
