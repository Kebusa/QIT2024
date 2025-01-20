const api = "https://jsonplaceholder.typicode.com/users"
const container = document.getElementById('container')


function fetchData() {
    fetch(api)
    .then(response => response.json())
    .then(data => {
     data.forEach(user => {
        const userName = user.name
        const userEmail = user.email
        const className = document.createElement('p')
        const classEmail = document.createElement('p')
        const allClass = document.createElement('div')

        className.textContent = userName
        classEmail.textContent = userEmail

        allClass.appendChild(className)
        allClass.appendChild(classEmail)
        container.appendChild(allClass)
     });
       
    })
    .catch(error => "Қате орын алды!" + error)
}
fetchData()