const api = "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films"
const contain = document.getElementById('contain')
const addFilm = document.getElementById('addFilm')
const clear = document.getElementById('clear')

async function filmFetch() {
    try {
       const response = await fetch(api) 
       const data = await response.json()
        data.forEach(film => {
            const card = document.createElement('div')

            card.innerHTML=`<img src="${film.image}" alt"immage">
            <h3>${film.filmName}</h3>
            <p>${film.Genre}</p>`
            
            contain.appendChild(card)
            
        });


    } catch (error) {
        console.log(error + "404");
        
    }
}
filmFetch()

let filmName = document.getElementById('filmName').value
let category = document.getElementById('category').value
let filmLink = document.getElementById('filmLink').value
const submit = document.getElementById('submit')