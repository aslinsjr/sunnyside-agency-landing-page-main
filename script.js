

document.addEventListener("wheel", () => {
    document.querySelector("body").style.overflow = "auto"
    document.querySelector(".title-container").opacity = "0"
    document.querySelector("header").style.animation = "screenDown 1s"
    document.querySelector("header").style.height = "10vh"

    if (window.scrollY > 10 && window.scrollY < 90) {
        document.querySelector("header").style.animation = "screenUp 1s"
        document.querySelector("header").style.height = "100vh"
        document.querySelector(".title-container").opacity = "1"
    }
})