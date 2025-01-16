const api = "https://jsonplaceholder.typicode.com/users"
const container = document.getElementById('container')
const name = document.getElementById('name')
const email = document.getElementById('email')
const count = 0

function fetchData() {
    fetch(api)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            container.innerHTML = `
            <p>Қолданушы аты: ${data[i].name}</p>
            <p>Email: ${data[i].email}</p>` 
        }
       
    })
    .catch(error => "Қате орын алды!" + error)
}
fetchData()