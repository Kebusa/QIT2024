const header = document.getElementById("header")
header.style.color = "red"

const coment = document.querySelector("#p3")
coment.style.color = "green"

const knopka = document.querySelector("#bot")
knopka.style.backgroundColor = "antiquewhite"
knopka.style.borderRadius = "5px"

function whenClicTurnRed(){
    knopka.style.color = "red"
    knopka.style.backgroundColor = "limegreen"
}
function whenMouseLeaveBotton() {
    knopka.style.backgroundColor = "antiquewhite"
    knopka.style.color = "black"
}