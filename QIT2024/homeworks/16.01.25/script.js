
const btn = document.getElementById('button');
const city = document.getElementById('cityName');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');

btn.addEventListener('click', () => {
    const apiKey = 'fb2cff02b71168e9f0c68fd3f83d168a';
    const input = document.getElementById('input');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric&lang=kk`;

    async function fetchData() {

        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            if (!response.ok) {
                throw new Error("Посттарды алу мұмкін болмады!")
            }
            const cityname = data.name

            city.textContent = `Қала: ${cityname}`
            temp.textContent = `Температура: ${data.main.temp} ℃`
            weather.textContent = `Ауа райы: ${data.weather[0].description}`
            
        } catch (error) {
            error => console.log("Ауа райы деректерін жүктеу мүмкін болмады" + error)
        }
    }
    fetchData()
});