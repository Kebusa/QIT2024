const firstName = document.getElementById('firstName')
const textarea = document.getElementById('textarea')
const save = document.getElementById('save')
const chose = document.getElementById('chose')
const clear = document.getElementById('clear')

save.addEventListener('click', () => {
    sessionStorage.setItem('text', firstName.value)
    sessionStorage.setItem('textarea', textarea.value)
    alert('saved!')
})
chose.addEventListener('click', () => {
    const text = sessionStorage.getItem('text')
    const area = sessionStorage.getItem('textarea')
    alert(`Сіздің атыңыз: ${text} \n Сіздің жазған текстіңіз: ${area}`)
})
clear.addEventListener('click', () => {
    sessionStorage.clear()
    alert('deleted!')
})