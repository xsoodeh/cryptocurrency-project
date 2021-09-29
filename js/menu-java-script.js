function openFunction() {
    let element = document.getElementById("menu-mob");
    let mainElement = document.getElementById("main-elements");
    element.classList.add("menu-mob-show");
    element.classList.remove("menu-mob-close");
    mainElement.classList.add("move-menu");
    mainElement.classList.remove("move-back-menu");
}
function closeFunction() {
    let element = document.getElementById("menu-mob");
    let mainElement = document.getElementById("main-elements");
    element.classList.remove("menu-mob-show");
    element.classList.add("menu-mob-close");
    mainElement.classList.remove("move-menu");
    mainElement.classList.add("move-back-menu");



}
