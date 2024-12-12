const textChange = document.getElementById("changeText")
const button1 = document.getElementById("button1")

button1.addEventListener('click', () => {
    textChange.textContent = "Сәлем, Әлем!"
})

const button2 =document.getElementById('button2')
const home = document.getElementById('home')

button2.addEventListener('click', ()=> {
    home.style.backgroundColor = "blue"
})

const box = document.getElementById("box")

box.addEventListener("mouseenter", () => {
    box.style.color = "red"
})
box.addEventListener("mouseleave", () => {
    box.style.color = "black"
})

const todayDay = document.getElementById("todayDay")
const clear = document.getElementById("clear")
const dataText = document.getElementById("dataText")

todayDay.addEventListener('click', () => {
    dataText.textContent = new Date()
})
clear.addEventListener('click', () => {
    dataText.textContent = ""
})