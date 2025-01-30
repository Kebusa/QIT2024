const changeColor = document.getElementById('changeColor')
const saveColor = document.getElementById('saveColor')
const clear = document.getElementById('clear')



function bgColor() {
    localStorage.setItem('changeColor', changeColor.value)
    const color = localStorage.getItem('changeColor')
    document.body.style.backgroundColor = color
}


saveColor.addEventListener('click', () =>{
    bgColor()
} ) 
clear.addEventListener('click', () => {
    
})


