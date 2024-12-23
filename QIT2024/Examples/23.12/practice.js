const text = document.getElementById('text')
const changeText = document.getElementById('changeText')

changeText.addEventListener('click', () => {
    text.classList.toggle('changed')
    document.body.classList.toggle('dark')
})