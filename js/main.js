//Grab DOM Elements
const shareIcon = document.querySelector(".share_icon")
const tooltip = document.querySelector(".tooltip")

//Listen for click events
shareIcon.addEventListener("mouseenter", () => {
    tooltip.classList.add("active")
})
shareIcon.addEventListener("mouseleave", () => {
    tooltip.classList.remove("active")
})