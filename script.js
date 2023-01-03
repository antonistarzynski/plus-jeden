const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav-bar");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navBar.classList.toggle("active");
})