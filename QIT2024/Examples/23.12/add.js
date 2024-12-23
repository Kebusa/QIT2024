const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('onhover')
})
searchButton.addEventListener('dblclick', () => {
    searchInput.classList.remove('shadow')
})

const text = document.getElementById('text')
const show = document.getElementById('show')

let isShow = false

show.addEventListener('click', () =>{
    text.classList.toggle('hide')
    isShow = !isShow
    show.textContent = isShow ? 'Show less' : 'Show more'
})