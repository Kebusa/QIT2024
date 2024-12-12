// const items = document.querySelectorAll(".item")
// items.forEach(item => item.textContent = "Element")

const myButton = document.getElementById("myButton")

myButton.addEventListener('click', function () {
    alert('button clicked')
    myButton.textContent = "Hello world"
    myButton.style.fontFamily = "cursive"
} )

myButton.addEventListener('mouseenter', function(){
    myButton.style.fontWeight = "bold"
})
myButton.addEventListener('mouseleave', function(){
    myButton.style.fontWeight = "normal"
})

const test = document.querySelector("#test")

test.addEventListener('click', function(){ 
    test.style.fontSize = "30px"
})

test.addEventListener('dblclick', function(){
    test.style.fontSize = "26px"
    test.style.color = "purple"
})

const fred = document.getElementById("fred")
const plus = document.getElementById("+")
const minus = document.getElementById("-")

plus.addEventListener('click',function(){
    fred.style.fontSize = "35px"
})
minus.addEventListener('click',function(){
    fred.style.fontSize = "10px"
})


const box = document.querySelector("#box")

box.addEventListener('mouseenter', function(){
    box.style.backgroundColor = "aquaMarine"
})

box.addEventListener('mouseleave', function(){
    box.style.backgroundColor = "white"
})

let num = 1
const total = document.querySelector("#total")
const pluser = document.querySelector("#pluser")
const minuser = document.querySelector("#minuser")

pluser.addEventListener('click',function(){
    total.textContent = +num
})
minuser.addEventListener('click',function(){
    total.textContent = -num
})


const items = document.querySelectorAll("#tiz")

for (const tiz of items) {
    tiz.addEventListener('click',() => {
        tiz.style.color = "red"
        tiz.style.fontSize = "20px"
    })
    
}


const cube = document.getElementById("cube")
const change = document.getElementById("colorChange")
const stock = document.getElementById("stokColor")

cube.addEventListener('mouseenter',function(){
    cube.style.backgroundColor = "red"
})
cube.addEventListener('mouseleave', function(){
    cube.style.backgroundColor = "lightGreen"
})
change.addEventListener('click',function(){
    cube.style.backgroundColor = "purple"
})
stock.addEventListener('click',function(){
    cube.style.backgroundColor = "lightgreen"
})

const square = document.getElementById("square")
const stockSquare = document.getElementById("stockSquare")

stockSquare.addEventListener('click',function () {
    let razmer = +prompt("enter razmer")
   square.style.width = razmer + 'px'
   square.style.height = razmer + 'px'
   square.style.backgroundColor = "purple"
})