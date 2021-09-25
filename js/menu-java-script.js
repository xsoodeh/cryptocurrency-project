function openFunction() {
    let element = document.getElementById("menu-mob");
    element.classList.add("menu-mob-show");
    element.classList.remove("menu-mob-close");

}
function closeFunction() {
    let element = document.getElementById("menu-mob");
    element.classList.remove("menu-mob-show");
    element.classList.add("menu-mob-close");
}
