const menuIcon = document.querySelector("#menu-icon")
const closeIcon = document.querySelector("#close-icon")
const menuBar = document.querySelector("#menu-bar")

menuIcon.addEventListener("click", toggleMenu)
closeIcon.addEventListener("click", toggleMenu)

function toggleMenu(){
    document.querySelector("header").classList.toggle("filter")
    document.querySelector("main").classList.toggle("filter")
    menuBar.classList.toggle("hide")
}

