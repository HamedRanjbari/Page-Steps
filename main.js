let $ = document
let btn = $.querySelectorAll("button")
let btnNext = $.querySelector(".btn-next")
let btnPrev = $.querySelector(".btn-prev")
let progress = $.querySelector(".progress")
let circles = $.querySelectorAll(".circle")
let currentNumber = 1

// Start main script
btnNext.addEventListener("click", () => {
    currentNumber++
    if (currentNumber > circles.length) {
        currentNumber = circles.length
    }
    update()
})
btnPrev.addEventListener("click", () => {
    currentNumber--
    if (currentNumber < 1) {
        currentNumber = 1
    }
    update()
})
circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        if (circle.innerHTML >= currentNumber) {
            currentNumber = circle.innerHTML
            update()
        } else {
            currentNumber = circle.innerHTML
            update()
        }
    })
})
// End main script
// Start update and btn Function
function update() {
    circles.forEach((circle, idx) => {
        if (currentNumber > idx) {
            circle.classList.add("active")
            let progWidth = ((currentNumber - 1) / (circles.length - 1)) * 100
            progress.style.width = progWidth + "%"
        } else {
            circle.classList.remove("active")
        }
        if (currentNumber == 1) {
            btnPrev.disabled = true
            btnNext.disabled = false
        } else if(currentNumber == circles.length){
        btnNext.disabled = true
        btnPrev.disabled = false
        } else {
            btnNext.disabled = false
            btnPrev.disabled = false
        }
    })
}
// End update and btn Function