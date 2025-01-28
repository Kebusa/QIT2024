
// const apiKey = "https://randomuser.me/API"
// const eName = document.getElementById('name')
// const email = document.getElementById('email')
// const gender = document.getElementById('gender')


// function fetchData() {
//     fetch(apiKey)
//     .then(response => response.json())
//     .then(data => {
//         eName.textContent = `name ${data.results[0].title}. ${data.results[0].first} ${data.results[0].last}`
//         email.textContent = `email ${data.results[0].email}`
//         gender.textContent = `gender ${data.results[0].gender}`
//     })

//     .catch(error => console.log(error + "404"))
// }
// fetchData()



// const title = document.getElementById('title')
// const apiKey = 'https://jsonplaceholder.typicode.com/todos'

// async function fetchData() {
//     try {
//         const response = await fetch(apiKey)
//         const data = await response.json()
//         for (let i = 0; i < data.length; i++) {
//             if (data[i].completed == true) {
//                 title.innerHTML = `<h3>${data[i].title}</h3>`
//             }
//         }
//     } catch (error) {
//         console.log(error + '404');
        
//     }
// }
// fetchData()
// async function fetchData() {
//     try {
//         const response = await fetch(apiKey)
//         const data = await response.json()
//         console.log(`Толық аты жөні: ${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}`);
//         console.log(`Поштасы: ${data.results[0].email}`);
//         console.log(`Жынысы: ${data.results[0].gender}`);
        
//     } catch (error) {
//         console.log(error + '404');
        
//     }
// }
// fetchData()


// const apiKey = "https://jsonplaceholder.typicode.com/users"
// const info = document.getElementById('info')

// async function fetchData() {
//     try {   
//         const response = await fetch(apiKey)
//         const data = response.json()
//         for (let i = 0; i < data.length; i++) {
//         info.innerHTML = `<h1>name: ${data[i].name}</h1> 
//         <h2>email:${data[i].email}</h2>`
//         }
        


        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// fetchData()


const amount = document.getElementById('amound')
const toCurrency = document.getElementById('toCurrency')
const check = document.getElementById('check')
const answer = document.getElementById('answer')
const apiKey = "https://api.exchangerate-api.com/v4/latest/USD"
let results = 0

async function fetchData() {
    try {
        const response = await fetch(apiKey)
        const data = await response.json()
        if (toCurrency.value == data.rates) {
           results = amount.value * data.rates.toCurrency.value
           
           answer.textContent = `${results} ${toCurrency.value}`
        }

    } catch (error) {
        console.log(error);
        
    }
}
check.addEventListener('click',fetchData())

