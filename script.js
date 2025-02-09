
const header = document.querySelector("header")
const titleContainer = document.querySelector(".title-container")
const innerFooter = document.querySelector(".inner-footer")


function scrollEffect() {
    document.addEventListener("scroll", () => {

        let height = document.body.scrollHeight

        if (window.scrollY !== 0) {
            header.classList.add("header-up")
            titleContainer.style.display = "none"
        } else {
            titleContainer.style.display = "flex"
            titleContainer.style.animation = "fadeIn 1s"
            header.classList.remove("header-up")
        }

        // if (window.scrollY > 0 && window.scrollY < 100) {
        //     header.style.animation = "screenUp 1s"
        //     header.style.height = "10vh"
        //     

        // }

        // if  (window.scrollY === 0){
        //     header.style.animation = "screenDown 1s"
        //     header.style.height = "100vh"
        //     
        //     
        // }

        if (window.scrollY === (height - innerHeight)) {

            header.style.opacity = "0"
            innerFooter.classList.add("footer-up")
        } else {
            header.style.opacity = "1"
            innerFooter.classList.remove("footer-up")
            document.querySelector("footer").style.marginTop = "-30vh"
        }

    })
}

console.log()

if (window.innerWidth > 500) {
    scrollEffect()
} else {
    header.style.position = "unset"
}



