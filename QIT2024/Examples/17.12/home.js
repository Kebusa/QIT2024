
const arrow = document.getElementById('arrow')

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrow.style.display = ""
    }else{
        arrow.style.display = "none"
    }
})

const head = document.getElementById('head')

window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
        head.style.background = "wheat"
        head.style.width = "90vw"
        head.style.marginLeft = "2%"
        head.style.marginRight = "2%"
    }
    else{
        head.style.background = "rgb(204, 199, 199)"
        head.style.width = "80vw"
        head.style.marginLeft = "5%"
        head.style.marginRight = "5%"
    }
})