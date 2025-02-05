const button = document.getElementById('button')
let city = document.getElementById('input').value

const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a"
const api = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric"






button.addEventListener('click', () => {
    if (city.value == data.name) {
        fetchData();
    }
    else{
        console.log(error);
        
    }
})

function fetchData() {
    fetch(api)
    .then(response => response.json())
    .then(data => {
        const temp = document.createElement('p')
        const weather = document.createElement('p')


        document.body.innerHTML = `<p> Temp: ${data.main.temp} ℃ </p>
        <p> Weather: ${data.weather[0].description}</p>`

        document.body.appendChild(temp, weather)
    })
}
fetchData()
